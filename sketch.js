
let scene,camera,renderer,cube,controls
let materialArray = []
function int() {
// controls = new OrbitControls( camera, renderer.domElement );
 scene = new THREE.Scene()
 camera = new THREE.PerspectiveCamera(55,window.innerWidth/window.innerHeight,45,30000)
renderer = new THREE.WebGLRenderer({antialias:true})
renderer.setSize(window.innerWidth,window.innerHeight)
document.body.appendChild(renderer.domElement)
//maim it's lot of code
const texture1 = new THREE.TextureLoader().load('1.jpg')
const texture2 = new THREE.TextureLoader().load('2.jpg')
const texture3 = new THREE.TextureLoader().load('3.jpg')
const texture4 = new THREE.TextureLoader().load('4.jpg')
const texture5 = new THREE.TextureLoader().load('5.jpg')
const texture6 = new THREE.TextureLoader().load('6.jpg')
materialArray.push(new THREE.MeshBasicMaterial({map:texture1}))
materialArray.push(new THREE.MeshBasicMaterial({map:texture2}))
materialArray.push(new THREE.MeshBasicMaterial({map:texture3}))
materialArray.push(new THREE.MeshBasicMaterial({map:texture4}))
materialArray.push(new THREE.MeshBasicMaterial({map:texture5}))
materialArray.push(new THREE.MeshBasicMaterial({map:texture6}))
for(let i=0;i<6;i++)
materialArray[i].side=THREE.BackSide
const geometry = new THREE.BoxGeometry( 10000,10000,10000);
 cube = new THREE.Mesh( geometry, materialArray );
scene.add( cube );
//controls = new OrbitControls(camera,renderer.domElement)
}
function animate(){
  requestAnimationFrame(animate)
    cube.rotation.y += 0.01
  renderer.render(scene,camera)
}
function onWindow() {
  camera.aspect = window.innerWidth/window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth,window.innerHeight)
}
window.addEventListener('resize',onWindow,false)
int() 
animate()
