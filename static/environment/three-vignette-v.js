let vert ="#define GLSLIFY 1\nattribute vec3 position;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nvarying vec2 vUv;\nvoid main() {\n  gl_Position = vec4(position, 1.0);\n  vUv = vec2(position.x, position.y) * 0.5 + 0.5;\n}\n";
export { vert };
