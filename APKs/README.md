# Light APKs

```Original APKs``` folder contains the APK files and separate ```.odex```  
APKs resources have been extracted using APKTool.  
```.odex``` files have been decomplied via baksmali (framework folder from L16 is required) > smali > dextools > ```.jar``` extracted and combined with the extracted APK resources.

# Goals
1) Find the Protobuf layout for ```.lri``` files that the Light L16 produces. This would enable us to extract raw data from Lumen photos.  
2) Find code to interact with the custom ASIC that controls the 16 sensors