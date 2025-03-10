import { Canvas, ThreeEvent, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { DirectionalLight, Group, Plane, Raycaster, Vector3 } from "three";
import { Button } from "./button";
import { Link } from "react-router";

interface Props {
  position: [number, number, number];
}

function DraggableCherry({ position }: Props) {
  const groupRef = useRef<Group | null>(null);
  const cherryLightRef = useRef<DirectionalLight | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePosition, setLastMousePosition] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const rotationVelocity = useRef({ x: 0, y: 0 });

  const [cherryPosition, setCherryPosition] =
    useState<[number, number, number]>(position);
  const targetPosition = useRef<Vector3>(new Vector3(...position));
  const dragOffset = useRef(new Vector3());
  const raycaster = useRef(new Raycaster());
  const dragPlane = useRef(new Plane());

  const lerpFactor = 0.2; // 부드러운 움직임을 위한 lerp 계수

  useFrame(() => {
    if (groupRef.current) {
      // 체리 오브젝트의 회전 및 감속 처리
      groupRef.current.rotation.y += rotationVelocity.current.x * 0.15;
      groupRef.current.rotation.x += rotationVelocity.current.y * 0.15;

      rotationVelocity.current.x *= 0.97; // 감속 효과
      rotationVelocity.current.y *= 0.97;

      // 부드러운 위치 움직임 (Lerp 적용)
      const currentPos = new Vector3(...cherryPosition);
      const newPos = currentPos.lerp(targetPosition.current, lerpFactor);
      setCherryPosition([newPos.x, newPos.y, newPos.z]);
    }

    // 회전에 따라 체리 조명의 위치 업데이트
    if (cherryLightRef.current && groupRef.current) {
      const angle = groupRef.current.rotation.y;
      cherryLightRef.current.position.set(
        Math.sin(angle) * 2,
        1,
        Math.cos(angle) * 2
      );
    }
  });

  // 마우스 클릭 시작 시 호출 (드래그 시작)
  const handlePointerDown = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();
    setIsDragging(true);
    setLastMousePosition({ x: event.clientX, y: event.clientY });

    // 드래그 시작 위치 저장
    const startPosition = new Vector3(...cherryPosition);

    if (event.camera) {
      // 카메라 방향을 기준으로 드래그 평면 설정
      const planeNormal = new Vector3()
        .subVectors(event.camera.position, startPosition)
        .normalize();
      dragPlane.current.setFromNormalAndCoplanarPoint(
        planeNormal,
        startPosition
      );

      raycaster.current.setFromCamera(event.pointer, event.camera);

      // 레이캐스터와 평면의 교차점 계산
      const intersectionPoint = new Vector3();
      raycaster.current.ray.intersectPlane(
        dragPlane.current,
        intersectionPoint
      );
      dragOffset.current.subVectors(startPosition, intersectionPoint);
    }
  };

  // 마우스 이동 시 호출 (드래그 중)
  const handlePointerMove = (event: ThreeEvent<PointerEvent>) => {
    if (isDragging && lastMousePosition && event.camera) {
      const deltaX = event.clientX - lastMousePosition.x;
      const deltaY = event.clientY - lastMousePosition.y;

      // 회전 감도 설정
      rotationVelocity.current.x = deltaX * 0.01;
      rotationVelocity.current.y = deltaY * 0.01;

      // 마우스 이동 시 위치를 평면에 맞춰서 갱신
      if (!event.shiftKey) {
        raycaster.current.setFromCamera(event.pointer, event.camera);

        const intersectionPoint = new Vector3();
        if (
          raycaster.current.ray.intersectPlane(
            dragPlane.current,
            intersectionPoint
          )
        ) {
          intersectionPoint.add(dragOffset.current); // 오프셋을 적용하여 새로운 위치 계산
          targetPosition.current.copy(intersectionPoint);
        }
      }

      setLastMousePosition({ x: event.clientX, y: event.clientY });
    }
  };

  // 드래그 종료 시 호출
  const handlePointerUp = () => {
    setIsDragging(false);
    setLastMousePosition(null);
  };

  return (
    <group
      position={cherryPosition}
      ref={groupRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      castShadow
    >
      {/* 체리 오브젝트에 그림자를 위한 조명 */}
      <directionalLight
        ref={cherryLightRef}
        position={[2, 1, 0]}
        intensity={0.8}
        castShadow
        shadow-mapSize={[512, 512]}
        shadow-camera-near={0.1}
        shadow-camera-far={10}
        shadow-camera-left={-1}
        shadow-camera-right={1}
        shadow-camera-top={1}
        shadow-camera-bottom={-1}
        shadow-bias={-0.0005}
      />

      {/* 체리 구체들 */}
      <mesh position={[-0.6, 0, 0]} castShadow receiveShadow>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color="#ff5e5e"
          roughness={0.05}
          metalness={0.1}
          emissive="red"
          emissiveIntensity={0.3}
          shadowSide={2}
        />
      </mesh>
      <mesh position={[0.6, 0, 0]} castShadow receiveShadow>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color="#ff5e5e"
          roughness={0.05}
          metalness={0.1}
          emissive="red"
          emissiveIntensity={0.3}
          shadowSide={2}
        />
      </mesh>

      {/* 체리 하이라이트 */}
      <mesh position={[-0.4, 0.15, 0.3]} scale={[0.15, 0.15, 0.05]}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial color="#ffffff" opacity={0.7} transparent />
      </mesh>
      <mesh position={[0.4, 0.15, 0.3]} scale={[0.15, 0.15, 0.05]}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial color="#ffffff" opacity={0.7} transparent />
      </mesh>

      {/* 체리 줄기 */}
      <mesh
        position={[-0.3, 0.9, 0]}
        rotation={[0, 0, -0.6]}
        castShadow
        receiveShadow
      >
        <cylinderGeometry args={[0.05, 0.05, 1, 16]} />
        <meshStandardMaterial color="green" roughness={0.6} shadowSide={2} />
      </mesh>
      <mesh
        position={[0.3, 0.9, 0]}
        rotation={[0, 0, 0.6]}
        castShadow
        receiveShadow
      >
        <cylinderGeometry args={[0.05, 0.05, 1, 16]} />
        <meshStandardMaterial color="green" roughness={0.6} shadowSide={2} />
      </mesh>

      {/* 잎 */}
      <mesh
        position={[0, 1.3, 0]}
        rotation={[Math.PI / 2, 0, 1.5]}
        castShadow
        receiveShadow
      >
        <cylinderGeometry args={[0.05, 0.05, 0.6, 16]} />
        <meshStandardMaterial color="green" roughness={0.6} shadowSide={2} />
      </mesh>
    </group>
  );
}

function ThreeScene() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <div className="font-Line-EN p-4 text-center">
        I am just having fun here, if you want to go back
        <Button asChild variant={"link"}>
          <Link to={"/"}>click here</Link>
        </Button>
      </div>
      <div className="flex-grow">
        <Canvas
          shadows
          style={{ width: "100%", height: "100%" }}
          camera={{ position: [0, 2, 5], fov: 50 }}
        >
          {/* 조명 설정 */}
          <ambientLight intensity={0.4} />
          <spotLight
            position={[5, 10, 5]}
            angle={0.3}
            penumbra={1}
            intensity={1.5}
            castShadow
            shadow-mapSize={[2048, 2048]}
            shadow-bias={-0.0001}
          />
          <pointLight position={[-5, -5, -5]} intensity={0.5} />
          <pointLight position={[3, 2, 1]} intensity={0.3} color="#ffeeee" />

          {/* 드래그 가능한 체리 오브젝트 */}
          <DraggableCherry position={[0, 0, 0]} />
        </Canvas>
      </div>
    </div>
  );
}

export default ThreeScene;
