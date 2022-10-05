
varying vec3 vertexNormal;
void main() {
    float intensity = pow (0.4 - dot(vertexNormal,vec3(1.0, 0.4824, 0.0)),0.01);
    

   
    gl_FragColor =  vec4(0.9608, 0.5961, 0.1176, 0.904) * intensity;


}
