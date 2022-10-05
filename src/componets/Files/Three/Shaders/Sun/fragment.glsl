uniform sampler2D globeTexture;

varying vec2 vertexUV; 
varying vec3 vertexNormal;

void main() {

// intensity of globe color    

    float intensity = 
            1.0 - dot(
            vertexNormal,
            vec3(0.9725, 0.0118, 0.0118));

//atmosphere color of globe

    vec3 atmosphere = 
            vec3(0.5922, 0.1255, 0.1255) * 
            pow(intensity, 0.4);
    
    //put together
    gl_FragColor =  vec4(atmosphere +
     texture2D(globeTexture,vertexUV).xyz
     , 1.1);
}