[![L16](https://github.com/helloavo/Light-L16-Archive/blob/main/Hardware/Images/Exploded.png)](https://htmlpreview.github.io/?https://raw.githubusercontent.com/helloavo/Light-L16-Archive/main/Hardware/Exploded%20View/camera.html)  
*[Go to interactive version](https://htmlpreview.github.io/?https://raw.githubusercontent.com/helloavo/Light-L16-Archive/main/Hardware/Exploded%20View/camera.html)*
## Aim
This repository is for archiving everything about Light L16 Camera before it is all lost from the internet.  
  
Now we have found the final version of LightOS(1.3.5.1), my aim has shifted to reverse engineering the Camera and Gallery apps to try and access individual Sensors, the RAW images contained in the .LRI Files or the Light ASIC (Application-specific integrated circuit).  
This would allow us to still use the Hardware and break free of LightOS.
  
## Website Content
The Light Website has been totally shut down but can be viewed via the [WayBack Machine](https://web.archive.org/web/20191222062257/https://light.co/camera) (Last Snapshot that had the L16 product page is Dec 22, 2019).  
  
~~The [L16 photography](https://support.light.co/l16-photography) Blog is still running but some images on early blog posts are broken.~~  
The Blog is not running anymore.    
I have created a clone of the blog posts to preserve their content, it can be found under 'Guides' > 'L16 photography blog', open 'index.html' and chose which blog post to view.
  
## Firmware
Upgrading your L16 Camera to version 1.3.5.1 is done at your own risk.  
This firmware was produced by Light who no longer support the Light L16 Camera.  
I, nor anyone who contributes to this repository accept any responsibility for any damage to your device.  
  
I suggest having at least half charge in your device before starting the upgrade.  
If you have any issues, you can enter the devices boot menu by holding the shutter button when powering up your device, from there you can wipe data.  

> :warning: **Remove Root before starting upgrade**:  
Root can cause a soft brick when applying the upgrade. Thanks [matthew___h](https://forum.xda-developers.com/t/light-l16-firmware.4403267/post-87944333/)

Instructions to update your Light L16 Camera to 1.3.5.1:
1. Download the zip file 'LFC-1351-0-00WW-A01-update' from Releases
2. Connect the Camera to your PC or MAC
3. Unlock your camera and choose the USB mode for "File transfers (MTP)" from the notification area.
4. Copy the firmware file (leave it zipped) to the root directory of 'L16' > 'Internal storage'.
5. Unplug your camera and turn the power off
6. Turn the camera power on you will see a Notification appear to apply the upgrade.
7. Agree the terms and choose Install Now. *Your L16 will restart several times during the upgrade*
8. After the installation is finished, you'll have the firmware 1.3.5.1 running on the L16 (verify in settings)
