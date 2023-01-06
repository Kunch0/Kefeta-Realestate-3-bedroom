(function(){
    var script = {
 "mouseWheelEnabled": true,
 "layout": "absolute",
 "borderRadius": 0,
 "id": "rootPlayer",
 "paddingBottom": 0,
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.MapViewer",
  "this.HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A",
  "this.HTMLText_77FFE780_68A3_305F_4195_72CF03F77028",
  "this.HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E",
  "this.HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16",
  "this.HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431",
  "this.HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A"
 ],
 "backgroundPreloadEnabled": true,
 "scrollBarWidth": 10,
 "start": "this.playAudioList([this.audio_ADF53E7D_830B_5219_41C2_93C8CD92002E]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "propagateClick": true,
 "verticalAlign": "top",
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "paddingRight": 0,
 "borderSize": 0,
 "width": "100%",
 "overflow": "visible",
 "paddingLeft": 0,
 "class": "Player",
 "desktopMipmappingEnabled": false,
 "minHeight": 20,
 "defaultVRPointer": "laser",
 "definitions": [{
 "overlays": [
  "this.overlay_A032CD51_8309_3669_41D6_348F394CE29E",
  "this.overlay_A27C88D9_8309_DE19_41DC_B3B4BEB14DC4",
  "this.panorama_9FFFBD09_830B_37F9_41DC_3EBCD7285018_tcap0"
 ],
 "hfovMin": "120%",
 "label": "3B_Entrance",
 "id": "panorama_9FFFBD09_830B_37F9_41DC_3EBCD7285018",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 158.65,
   "yaw": 13.57,
   "distance": 1,
   "panorama": "this.panorama_9FF45638_8308_F227_41DF_8B35BC612538"
  }
 ],
 "pitch": 0,
 "hfovMax": 130,
 "partial": false,
 "vfov": 180,
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "levels": [
     {
      "url": "media/panorama_9FFFBD09_830B_37F9_41DC_3EBCD7285018_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FFFBD09_830B_37F9_41DC_3EBCD7285018_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FFFBD09_830B_37F9_41DC_3EBCD7285018_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FFFBD09_830B_37F9_41DC_3EBCD7285018_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_9FFFBD09_830B_37F9_41DC_3EBCD7285018_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FFFBD09_830B_37F9_41DC_3EBCD7285018_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FFFBD09_830B_37F9_41DC_3EBCD7285018_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FFFBD09_830B_37F9_41DC_3EBCD7285018_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9FFFBD09_830B_37F9_41DC_3EBCD7285018_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FFFBD09_830B_37F9_41DC_3EBCD7285018_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FFFBD09_830B_37F9_41DC_3EBCD7285018_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FFFBD09_830B_37F9_41DC_3EBCD7285018_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9FFFBD09_830B_37F9_41DC_3EBCD7285018_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FFFBD09_830B_37F9_41DC_3EBCD7285018_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FFFBD09_830B_37F9_41DC_3EBCD7285018_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FFFBD09_830B_37F9_41DC_3EBCD7285018_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_9FFFBD09_830B_37F9_41DC_3EBCD7285018_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9FFFBD09_830B_37F9_41DC_3EBCD7285018_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FFFBD09_830B_37F9_41DC_3EBCD7285018_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FFFBD09_830B_37F9_41DC_3EBCD7285018_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FFFBD09_830B_37F9_41DC_3EBCD7285018_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_9FFFBD09_830B_37F9_41DC_3EBCD7285018_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FFFBD09_830B_37F9_41DC_3EBCD7285018_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FFFBD09_830B_37F9_41DC_3EBCD7285018_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FFFBD09_830B_37F9_41DC_3EBCD7285018_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "thumbnailUrl": "media/panorama_9FFFBD09_830B_37F9_41DC_3EBCD7285018_t.jpg"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_9FFFBD09_830B_37F9_41DC_3EBCD7285018_camera"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_9FFCEF87_830B_52E9_41C4_593E824FCB4A_camera"
},
{
 "overlays": [
  "this.overlay_A40B5DD0_830F_5667_41CF_5A07A09A20BC",
  "this.overlay_A907D2FC_8309_F21F_41C4_B8A71EFD55B7",
  "this.panorama_9FFA41DF_8309_6E19_418B_D455F8292C87_tcap0"
 ],
 "hfovMin": "120%",
 "label": "3B_Bedroom 2",
 "id": "panorama_9FFA41DF_8309_6E19_418B_D455F8292C87",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -37.68,
   "yaw": -161.03,
   "distance": 1,
   "panorama": "this.panorama_9FF7E741_8308_D269_41CA_B8E85FB7482B"
  }
 ],
 "pitch": 0,
 "hfovMax": 130,
 "partial": false,
 "vfov": 180,
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "levels": [
     {
      "url": "media/panorama_9FFA41DF_8309_6E19_418B_D455F8292C87_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FFA41DF_8309_6E19_418B_D455F8292C87_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FFA41DF_8309_6E19_418B_D455F8292C87_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FFA41DF_8309_6E19_418B_D455F8292C87_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_9FFA41DF_8309_6E19_418B_D455F8292C87_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FFA41DF_8309_6E19_418B_D455F8292C87_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FFA41DF_8309_6E19_418B_D455F8292C87_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FFA41DF_8309_6E19_418B_D455F8292C87_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9FFA41DF_8309_6E19_418B_D455F8292C87_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FFA41DF_8309_6E19_418B_D455F8292C87_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FFA41DF_8309_6E19_418B_D455F8292C87_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FFA41DF_8309_6E19_418B_D455F8292C87_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9FFA41DF_8309_6E19_418B_D455F8292C87_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FFA41DF_8309_6E19_418B_D455F8292C87_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FFA41DF_8309_6E19_418B_D455F8292C87_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FFA41DF_8309_6E19_418B_D455F8292C87_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_9FFA41DF_8309_6E19_418B_D455F8292C87_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9FFA41DF_8309_6E19_418B_D455F8292C87_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FFA41DF_8309_6E19_418B_D455F8292C87_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FFA41DF_8309_6E19_418B_D455F8292C87_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FFA41DF_8309_6E19_418B_D455F8292C87_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_9FFA41DF_8309_6E19_418B_D455F8292C87_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FFA41DF_8309_6E19_418B_D455F8292C87_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FFA41DF_8309_6E19_418B_D455F8292C87_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FFA41DF_8309_6E19_418B_D455F8292C87_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "thumbnailUrl": "media/panorama_9FFA41DF_8309_6E19_418B_D455F8292C87_t.jpg"
},
{
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "mouseControlMode": "drag_acceleration",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "displayPlaybackBar": true,
 "class": "PanoramaPlayer"
},
{
 "overlays": [
  "this.overlay_A45708B6_8308_FE2B_41D6_6AA19A6C5790",
  "this.overlay_AA4C5DA1_830F_5629_41D1_E52CAC883B8D",
  "this.panorama_9FE1A188_8309_6EE7_41BE_AC1F6CB72330_tcap0"
 ],
 "hfovMin": "120%",
 "label": "3B_Bedroom 1",
 "id": "panorama_9FE1A188_8309_6EE7_41BE_AC1F6CB72330",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -104.51,
   "yaw": 125.11,
   "distance": 1,
   "panorama": "this.panorama_9FF7E741_8308_D269_41CA_B8E85FB7482B"
  }
 ],
 "pitch": 0,
 "hfovMax": 130,
 "partial": false,
 "vfov": 180,
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "levels": [
     {
      "url": "media/panorama_9FE1A188_8309_6EE7_41BE_AC1F6CB72330_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FE1A188_8309_6EE7_41BE_AC1F6CB72330_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FE1A188_8309_6EE7_41BE_AC1F6CB72330_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FE1A188_8309_6EE7_41BE_AC1F6CB72330_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_9FE1A188_8309_6EE7_41BE_AC1F6CB72330_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FE1A188_8309_6EE7_41BE_AC1F6CB72330_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FE1A188_8309_6EE7_41BE_AC1F6CB72330_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FE1A188_8309_6EE7_41BE_AC1F6CB72330_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9FE1A188_8309_6EE7_41BE_AC1F6CB72330_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FE1A188_8309_6EE7_41BE_AC1F6CB72330_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FE1A188_8309_6EE7_41BE_AC1F6CB72330_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FE1A188_8309_6EE7_41BE_AC1F6CB72330_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9FE1A188_8309_6EE7_41BE_AC1F6CB72330_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FE1A188_8309_6EE7_41BE_AC1F6CB72330_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FE1A188_8309_6EE7_41BE_AC1F6CB72330_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FE1A188_8309_6EE7_41BE_AC1F6CB72330_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_9FE1A188_8309_6EE7_41BE_AC1F6CB72330_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9FE1A188_8309_6EE7_41BE_AC1F6CB72330_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FE1A188_8309_6EE7_41BE_AC1F6CB72330_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FE1A188_8309_6EE7_41BE_AC1F6CB72330_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FE1A188_8309_6EE7_41BE_AC1F6CB72330_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_9FE1A188_8309_6EE7_41BE_AC1F6CB72330_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FE1A188_8309_6EE7_41BE_AC1F6CB72330_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FE1A188_8309_6EE7_41BE_AC1F6CB72330_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FE1A188_8309_6EE7_41BE_AC1F6CB72330_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "thumbnailUrl": "media/panorama_9FE1A188_8309_6EE7_41BE_AC1F6CB72330_t.jpg"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -166.43,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_AE91EDD2_8308_D66B_41D4_D1C5E7A8DD77"
},
{
 "overlays": [
  "this.overlay_AA33165E_833F_521B_41D6_230F5D751CD4",
  "this.overlay_A80D2343_833F_3269_41D3_1CB00F155E88",
  "this.panorama_9FFE2858_830B_DE67_41C5_89D5A3C71A44_tcap0"
 ],
 "hfovMin": "120%",
 "label": "3B_Master bedroom_2",
 "id": "panorama_9FFE2858_830B_DE67_41C5_89D5A3C71A44",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 18.46,
   "yaw": -11.43,
   "distance": 1,
   "panorama": "this.panorama_9FFAF41F_830B_F619_41D6_F2B2E7CC9978"
  }
 ],
 "pitch": 0,
 "hfovMax": 130,
 "partial": false,
 "vfov": 180,
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "levels": [
     {
      "url": "media/panorama_9FFE2858_830B_DE67_41C5_89D5A3C71A44_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FFE2858_830B_DE67_41C5_89D5A3C71A44_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FFE2858_830B_DE67_41C5_89D5A3C71A44_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FFE2858_830B_DE67_41C5_89D5A3C71A44_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_9FFE2858_830B_DE67_41C5_89D5A3C71A44_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FFE2858_830B_DE67_41C5_89D5A3C71A44_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FFE2858_830B_DE67_41C5_89D5A3C71A44_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FFE2858_830B_DE67_41C5_89D5A3C71A44_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9FFE2858_830B_DE67_41C5_89D5A3C71A44_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FFE2858_830B_DE67_41C5_89D5A3C71A44_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FFE2858_830B_DE67_41C5_89D5A3C71A44_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FFE2858_830B_DE67_41C5_89D5A3C71A44_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9FFE2858_830B_DE67_41C5_89D5A3C71A44_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FFE2858_830B_DE67_41C5_89D5A3C71A44_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FFE2858_830B_DE67_41C5_89D5A3C71A44_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FFE2858_830B_DE67_41C5_89D5A3C71A44_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_9FFE2858_830B_DE67_41C5_89D5A3C71A44_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9FFE2858_830B_DE67_41C5_89D5A3C71A44_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FFE2858_830B_DE67_41C5_89D5A3C71A44_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FFE2858_830B_DE67_41C5_89D5A3C71A44_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FFE2858_830B_DE67_41C5_89D5A3C71A44_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_9FFE2858_830B_DE67_41C5_89D5A3C71A44_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FFE2858_830B_DE67_41C5_89D5A3C71A44_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FFE2858_830B_DE67_41C5_89D5A3C71A44_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FFE2858_830B_DE67_41C5_89D5A3C71A44_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "thumbnailUrl": "media/panorama_9FFE2858_830B_DE67_41C5_89D5A3C71A44_t.jpg"
},
{
 "overlays": [
  "this.overlay_ABF4A0FE_8308_EE1B_41CB_A6A1CAFAD508",
  "this.overlay_AB2E8D27_8309_7629_41CA_76E348EB90CF",
  "this.panorama_9FE27220_830B_D227_41DC_E4092263681F_tcap0"
 ],
 "hfovMin": "120%",
 "label": "3B_Master Bathroom",
 "id": "panorama_9FE27220_830B_D227_41DC_E4092263681F",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -161.28,
   "yaw": -119.58,
   "distance": 1,
   "panorama": "this.panorama_9FFAF41F_830B_F619_41D6_F2B2E7CC9978"
  }
 ],
 "pitch": 0,
 "hfovMax": 130,
 "partial": false,
 "vfov": 180,
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "levels": [
     {
      "url": "media/panorama_9FE27220_830B_D227_41DC_E4092263681F_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FE27220_830B_D227_41DC_E4092263681F_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FE27220_830B_D227_41DC_E4092263681F_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FE27220_830B_D227_41DC_E4092263681F_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_9FE27220_830B_D227_41DC_E4092263681F_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FE27220_830B_D227_41DC_E4092263681F_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FE27220_830B_D227_41DC_E4092263681F_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FE27220_830B_D227_41DC_E4092263681F_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9FE27220_830B_D227_41DC_E4092263681F_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FE27220_830B_D227_41DC_E4092263681F_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FE27220_830B_D227_41DC_E4092263681F_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FE27220_830B_D227_41DC_E4092263681F_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9FE27220_830B_D227_41DC_E4092263681F_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FE27220_830B_D227_41DC_E4092263681F_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FE27220_830B_D227_41DC_E4092263681F_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FE27220_830B_D227_41DC_E4092263681F_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_9FE27220_830B_D227_41DC_E4092263681F_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9FE27220_830B_D227_41DC_E4092263681F_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FE27220_830B_D227_41DC_E4092263681F_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FE27220_830B_D227_41DC_E4092263681F_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FE27220_830B_D227_41DC_E4092263681F_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_9FE27220_830B_D227_41DC_E4092263681F_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FE27220_830B_D227_41DC_E4092263681F_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FE27220_830B_D227_41DC_E4092263681F_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FE27220_830B_D227_41DC_E4092263681F_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "thumbnailUrl": "media/panorama_9FE27220_830B_D227_41DC_E4092263681F_t.jpg"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -83.78,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_AEBB2DA7_8308_D629_41E0_2307ADEE77C5"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_9FFE2858_830B_DE67_41C5_89D5A3C71A44_camera"
},
{
 "overlays": [
  "this.overlay_A9ED6FD8_833B_3267_41D7_722705687820",
  "this.overlay_AF43CCD2_833B_766B_41C1_D5B85B44D2F9",
  "this.panorama_9D3D8091_8309_2EE9_41DE_7148C3CEECCE_tcap0"
 ],
 "hfovMin": "120%",
 "label": "3B_Bathroom",
 "id": "panorama_9D3D8091_8309_2EE9_41DE_7148C3CEECCE",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 124.86,
   "yaw": -31.15,
   "distance": 1,
   "panorama": "this.panorama_9FF7E741_8308_D269_41CA_B8E85FB7482B"
  }
 ],
 "pitch": 0,
 "hfovMax": 130,
 "partial": false,
 "vfov": 180,
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "levels": [
     {
      "url": "media/panorama_9D3D8091_8309_2EE9_41DE_7148C3CEECCE_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9D3D8091_8309_2EE9_41DE_7148C3CEECCE_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9D3D8091_8309_2EE9_41DE_7148C3CEECCE_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9D3D8091_8309_2EE9_41DE_7148C3CEECCE_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_9D3D8091_8309_2EE9_41DE_7148C3CEECCE_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9D3D8091_8309_2EE9_41DE_7148C3CEECCE_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9D3D8091_8309_2EE9_41DE_7148C3CEECCE_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9D3D8091_8309_2EE9_41DE_7148C3CEECCE_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9D3D8091_8309_2EE9_41DE_7148C3CEECCE_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9D3D8091_8309_2EE9_41DE_7148C3CEECCE_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9D3D8091_8309_2EE9_41DE_7148C3CEECCE_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9D3D8091_8309_2EE9_41DE_7148C3CEECCE_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9D3D8091_8309_2EE9_41DE_7148C3CEECCE_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9D3D8091_8309_2EE9_41DE_7148C3CEECCE_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9D3D8091_8309_2EE9_41DE_7148C3CEECCE_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9D3D8091_8309_2EE9_41DE_7148C3CEECCE_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_9D3D8091_8309_2EE9_41DE_7148C3CEECCE_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9D3D8091_8309_2EE9_41DE_7148C3CEECCE_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9D3D8091_8309_2EE9_41DE_7148C3CEECCE_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9D3D8091_8309_2EE9_41DE_7148C3CEECCE_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9D3D8091_8309_2EE9_41DE_7148C3CEECCE_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_9D3D8091_8309_2EE9_41DE_7148C3CEECCE_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9D3D8091_8309_2EE9_41DE_7148C3CEECCE_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9D3D8091_8309_2EE9_41DE_7148C3CEECCE_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9D3D8091_8309_2EE9_41DE_7148C3CEECCE_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "thumbnailUrl": "media/panorama_9D3D8091_8309_2EE9_41DE_7148C3CEECCE_t.jpg"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -166.43,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_AE99DDDD_8308_D619_41C6_7294D0122D59"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 74.73,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_AE29CE53_8308_D269_41D3_BA21DAB95E4C"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 1,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 358,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 1,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_9FF45638_8308_F227_41DF_8B35BC612538_camera"
},
{
 "overlays": [
  "this.overlay_A9DB2C52_8338_F66B_41CA_6DE552C1D247",
  "this.overlay_AFD51948_8339_FE67_41DF_6B34A984A321",
  "this.panorama_9FFC29FA_830B_3E1B_41DE_5FC76247E707_tcap0"
 ],
 "hfovMin": "120%",
 "label": "3B_Store",
 "id": "panorama_9FFC29FA_830B_3E1B_41DE_5FC76247E707",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 36.93,
   "yaw": 96.22,
   "distance": 1,
   "panorama": "this.panorama_9FFA37AB_8309_3239_41D3_CA81E34B0E4C"
  }
 ],
 "pitch": 0,
 "hfovMax": 130,
 "partial": false,
 "vfov": 180,
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "levels": [
     {
      "url": "media/panorama_9FFC29FA_830B_3E1B_41DE_5FC76247E707_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FFC29FA_830B_3E1B_41DE_5FC76247E707_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FFC29FA_830B_3E1B_41DE_5FC76247E707_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FFC29FA_830B_3E1B_41DE_5FC76247E707_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_9FFC29FA_830B_3E1B_41DE_5FC76247E707_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FFC29FA_830B_3E1B_41DE_5FC76247E707_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FFC29FA_830B_3E1B_41DE_5FC76247E707_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FFC29FA_830B_3E1B_41DE_5FC76247E707_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9FFC29FA_830B_3E1B_41DE_5FC76247E707_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FFC29FA_830B_3E1B_41DE_5FC76247E707_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FFC29FA_830B_3E1B_41DE_5FC76247E707_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FFC29FA_830B_3E1B_41DE_5FC76247E707_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9FFC29FA_830B_3E1B_41DE_5FC76247E707_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FFC29FA_830B_3E1B_41DE_5FC76247E707_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FFC29FA_830B_3E1B_41DE_5FC76247E707_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FFC29FA_830B_3E1B_41DE_5FC76247E707_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_9FFC29FA_830B_3E1B_41DE_5FC76247E707_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9FFC29FA_830B_3E1B_41DE_5FC76247E707_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FFC29FA_830B_3E1B_41DE_5FC76247E707_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FFC29FA_830B_3E1B_41DE_5FC76247E707_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FFC29FA_830B_3E1B_41DE_5FC76247E707_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_9FFC29FA_830B_3E1B_41DE_5FC76247E707_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FFC29FA_830B_3E1B_41DE_5FC76247E707_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FFC29FA_830B_3E1B_41DE_5FC76247E707_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FFC29FA_830B_3E1B_41DE_5FC76247E707_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "thumbnailUrl": "media/panorama_9FFC29FA_830B_3E1B_41DE_5FC76247E707_t.jpg"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -37.81,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_AE577E14_8308_D5EF_41DF_DE58F4CA7915"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 110.41,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 1,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 358,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 1,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_AEB16D9C_8308_D61F_41DA_1362F0896227"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 168.57,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_ADC56EAC_8308_D23F_4160_11322080D4A5"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 47.1,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_ADDE9EA1_8308_D229_41DE_EDBCAB317CC2"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -129,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_AE74FDF4_8308_D62F_41A6_ECC812EE14EF"
},
{
 "overlays": [
  "this.overlay_A1612E4E_837F_327B_41D6_CFA501BD6FE3",
  "this.overlay_A0F26355_8378_D269_4191_64CA0006B2DD",
  "this.overlay_A1C4BBA8_8379_F227_41DD_D850124BA5DF",
  "this.overlay_A0EBE9C9_8379_3E79_41DE_FFD7F11F72FA",
  "this.overlay_A1591781_837B_D2E9_41C2_1CE9CD026DD6",
  "this.overlay_A7C61436_8378_D62B_41AE_B45764C036F9",
  "this.overlay_A7EEB863_8379_DE29_419E_D9D35742AD62",
  "this.overlay_A0FEA1BB_8379_6E19_41AE_95B5B01A9D58",
  "this.panorama_9FFA37AB_8309_3239_41D3_CA81E34B0E4C_tcap0"
 ],
 "hfovMin": "120%",
 "label": "3B_Corridor 2",
 "id": "panorama_9FFA37AB_8309_3239_41D3_CA81E34B0E4C",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -69.59,
   "yaw": -18.46,
   "distance": 1,
   "panorama": "this.panorama_9FF45638_8308_F227_41DF_8B35BC612538"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 96.22,
   "yaw": 36.93,
   "distance": 1,
   "panorama": "this.panorama_9FFC29FA_830B_3E1B_41DE_5FC76247E707"
  },
  {
   "panorama": "this.panorama_9FF7E741_8308_D269_41CA_B8E85FB7482B",
   "class": "AdjacentPanorama"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -12.54,
   "yaw": -39.06,
   "distance": 1,
   "panorama": "this.panorama_9FF4BC25_830B_5629_41C3_97E0E100E7B4"
  }
 ],
 "pitch": 0,
 "hfovMax": 130,
 "partial": false,
 "vfov": 180,
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "levels": [
     {
      "url": "media/panorama_9FFA37AB_8309_3239_41D3_CA81E34B0E4C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FFA37AB_8309_3239_41D3_CA81E34B0E4C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FFA37AB_8309_3239_41D3_CA81E34B0E4C_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FFA37AB_8309_3239_41D3_CA81E34B0E4C_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_9FFA37AB_8309_3239_41D3_CA81E34B0E4C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FFA37AB_8309_3239_41D3_CA81E34B0E4C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FFA37AB_8309_3239_41D3_CA81E34B0E4C_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FFA37AB_8309_3239_41D3_CA81E34B0E4C_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9FFA37AB_8309_3239_41D3_CA81E34B0E4C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FFA37AB_8309_3239_41D3_CA81E34B0E4C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FFA37AB_8309_3239_41D3_CA81E34B0E4C_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FFA37AB_8309_3239_41D3_CA81E34B0E4C_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9FFA37AB_8309_3239_41D3_CA81E34B0E4C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FFA37AB_8309_3239_41D3_CA81E34B0E4C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FFA37AB_8309_3239_41D3_CA81E34B0E4C_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FFA37AB_8309_3239_41D3_CA81E34B0E4C_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_9FFA37AB_8309_3239_41D3_CA81E34B0E4C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9FFA37AB_8309_3239_41D3_CA81E34B0E4C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FFA37AB_8309_3239_41D3_CA81E34B0E4C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FFA37AB_8309_3239_41D3_CA81E34B0E4C_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FFA37AB_8309_3239_41D3_CA81E34B0E4C_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_9FFA37AB_8309_3239_41D3_CA81E34B0E4C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FFA37AB_8309_3239_41D3_CA81E34B0E4C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FFA37AB_8309_3239_41D3_CA81E34B0E4C_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FFA37AB_8309_3239_41D3_CA81E34B0E4C_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "thumbnailUrl": "media/panorama_9FFA37AB_8309_3239_41D3_CA81E34B0E4C_t.jpg"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 1,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 358,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 1,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_9FFA37AB_8309_3239_41D3_CA81E34B0E4C_camera"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -54.89,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_AE5DBE1F_8308_D219_41D1_E1F6B1196BED"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 60.42,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_ADEB9E96_8308_D2EB_41D2_66C34D12E4D6"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 18.72,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_AEB5DD92_8308_D6EB_41D3_708668C7F24B"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -21.35,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 1,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 358,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 1,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_AECB4D86_8308_D6EB_41C0_DEE2DFE1D2F3"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 18.97,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_AE40CE29_8308_D239_41DA_5ACF6BE261DF"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 162.67,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_AE966DC8_8308_D667_41D4_19CD83F5FFD0"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -55.14,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_ADA8DED9_8308_D219_41DB_6D3C45671116"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_9FFB25D9_8308_D619_41CC_F93DB0C268CC_camera"
},
{
 "overlays": [
  "this.overlay_ABAF8B99_8309_3219_41C0_6306A6E48FBC",
  "this.overlay_ABAC6D67_8307_3629_41DA_D3F95AEDF731",
  "this.overlay_AA1E07C0_8338_F267_419B_85A1E26059A8",
  "this.overlay_AA65524C_8339_727F_4191_7BC006A93119",
  "this.overlay_AA34A295_833B_52E9_41CE_F995CDC4DACF",
  "this.overlay_AF278D3B_833B_5619_419D_4C47D6E31E89",
  "this.overlay_A9BD50D8_8339_6E67_41DC_867E37F9AFC3",
  "this.panorama_9FFAF41F_830B_F619_41D6_F2B2E7CC9978_tcap0"
 ],
 "hfovMin": "120%",
 "label": "3B_Master bedroom",
 "id": "panorama_9FFAF41F_830B_F619_41D6_F2B2E7CC9978",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -119.58,
   "yaw": -161.28,
   "distance": 1,
   "panorama": "this.panorama_9FE27220_830B_D227_41DC_E4092263681F"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -119.58,
   "yaw": 170.45,
   "distance": 1,
   "panorama": "this.panorama_9FE27220_830B_D227_41DC_E4092263681F"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -132.9,
   "yaw": 142.19,
   "distance": 1,
   "panorama": "this.panorama_9FF7E741_8308_D269_41CA_B8E85FB7482B"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -11.43,
   "yaw": 18.46,
   "distance": 1,
   "panorama": "this.panorama_9FFE2858_830B_DE67_41C5_89D5A3C71A44"
  }
 ],
 "pitch": 0,
 "hfovMax": 130,
 "partial": false,
 "vfov": 180,
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "levels": [
     {
      "url": "media/panorama_9FFAF41F_830B_F619_41D6_F2B2E7CC9978_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FFAF41F_830B_F619_41D6_F2B2E7CC9978_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FFAF41F_830B_F619_41D6_F2B2E7CC9978_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FFAF41F_830B_F619_41D6_F2B2E7CC9978_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_9FFAF41F_830B_F619_41D6_F2B2E7CC9978_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FFAF41F_830B_F619_41D6_F2B2E7CC9978_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FFAF41F_830B_F619_41D6_F2B2E7CC9978_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FFAF41F_830B_F619_41D6_F2B2E7CC9978_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9FFAF41F_830B_F619_41D6_F2B2E7CC9978_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FFAF41F_830B_F619_41D6_F2B2E7CC9978_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FFAF41F_830B_F619_41D6_F2B2E7CC9978_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FFAF41F_830B_F619_41D6_F2B2E7CC9978_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9FFAF41F_830B_F619_41D6_F2B2E7CC9978_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FFAF41F_830B_F619_41D6_F2B2E7CC9978_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FFAF41F_830B_F619_41D6_F2B2E7CC9978_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FFAF41F_830B_F619_41D6_F2B2E7CC9978_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_9FFAF41F_830B_F619_41D6_F2B2E7CC9978_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9FFAF41F_830B_F619_41D6_F2B2E7CC9978_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FFAF41F_830B_F619_41D6_F2B2E7CC9978_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FFAF41F_830B_F619_41D6_F2B2E7CC9978_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FFAF41F_830B_F619_41D6_F2B2E7CC9978_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_9FFAF41F_830B_F619_41D6_F2B2E7CC9978_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FFAF41F_830B_F619_41D6_F2B2E7CC9978_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FFAF41F_830B_F619_41D6_F2B2E7CC9978_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FFAF41F_830B_F619_41D6_F2B2E7CC9978_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "thumbnailUrl": "media/panorama_9FFAF41F_830B_F619_41D6_F2B2E7CC9978_t.jpg"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 142.32,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_AE1C8E5F_8308_D219_41DE_F048B2F68835"
},
{
 "items": [
  {
   "media": "this.panorama_9FFFBD09_830B_37F9_41DC_3EBCD7285018",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9FFFBD09_830B_37F9_41DC_3EBCD7285018_camera"
  },
  {
   "media": "this.panorama_9FF45638_8308_F227_41DF_8B35BC612538",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9FF45638_8308_F227_41DF_8B35BC612538_camera"
  },
  {
   "media": "this.panorama_9FFA37AB_8309_3239_41D3_CA81E34B0E4C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9FFA37AB_8309_3239_41D3_CA81E34B0E4C_camera"
  },
  {
   "media": "this.panorama_9FF7E741_8308_D269_41CA_B8E85FB7482B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9FF7E741_8308_D269_41CA_B8E85FB7482B_camera"
  },
  {
   "media": "this.panorama_9FFB25D9_8308_D619_41CC_F93DB0C268CC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9FFB25D9_8308_D619_41CC_F93DB0C268CC_camera"
  },
  {
   "media": "this.panorama_9FF4BC25_830B_5629_41C3_97E0E100E7B4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9FF4BC25_830B_5629_41C3_97E0E100E7B4_camera"
  },
  {
   "media": "this.panorama_9FFA5B2B_830B_7239_41BD_D27A6EA3EC79",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9FFA5B2B_830B_7239_41BD_D27A6EA3EC79_camera"
  },
  {
   "media": "this.panorama_9FFCEF87_830B_52E9_41C4_593E824FCB4A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9FFCEF87_830B_52E9_41C4_593E824FCB4A_camera"
  },
  {
   "media": "this.panorama_9FE1A188_8309_6EE7_41BE_AC1F6CB72330",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9FE1A188_8309_6EE7_41BE_AC1F6CB72330_camera"
  },
  {
   "media": "this.panorama_9FFA41DF_8309_6E19_418B_D455F8292C87",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9FFA41DF_8309_6E19_418B_D455F8292C87_camera"
  },
  {
   "media": "this.panorama_9FE27220_830B_D227_41DC_E4092263681F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9FE27220_830B_D227_41DC_E4092263681F_camera"
  },
  {
   "media": "this.panorama_9FFAF41F_830B_F619_41D6_F2B2E7CC9978",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9FFAF41F_830B_F619_41D6_F2B2E7CC9978_camera"
  },
  {
   "media": "this.panorama_9FFE2858_830B_DE67_41C5_89D5A3C71A44",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9FFE2858_830B_DE67_41C5_89D5A3C71A44_camera"
  },
  {
   "media": "this.panorama_9FFC29FA_830B_3E1B_41DE_5FC76247E707",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9FFC29FA_830B_3E1B_41DE_5FC76247E707_camera"
  },
  {
   "media": "this.panorama_9D3D8091_8309_2EE9_41DE_7148C3CEECCE",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9D3D8091_8309_2EE9_41DE_7148C3CEECCE_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "overlays": [
  "this.overlay_A6E5C69B_8319_F219_41DE_2B85C45BE36E",
  "this.overlay_A6AB91DA_831F_EE1B_41B3_136DA54898C4",
  "this.overlay_A5EB3E9B_8318_F219_41DD_F4E92DD38D2B",
  "this.overlay_A597BDBE_8319_D61B_41DE_56B9C10CD0B1",
  "this.panorama_9FF4BC25_830B_5629_41C3_97E0E100E7B4_tcap0",
  "this.overlay_A967BAF0_8309_5227_41DB_99E5278D708B"
 ],
 "hfovMin": "120%",
 "label": "3B_Kitchen",
 "id": "panorama_9FF4BC25_830B_5629_41C3_97E0E100E7B4",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -39.06,
   "yaw": -12.54,
   "distance": 1,
   "panorama": "this.panorama_9FFA37AB_8309_3239_41D3_CA81E34B0E4C"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 145.61,
   "yaw": -105.27,
   "distance": 1,
   "panorama": "this.panorama_9FFB25D9_8308_D619_41CC_F93DB0C268CC"
  }
 ],
 "pitch": 0,
 "hfovMax": 130,
 "partial": false,
 "vfov": 180,
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "levels": [
     {
      "url": "media/panorama_9FF4BC25_830B_5629_41C3_97E0E100E7B4_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FF4BC25_830B_5629_41C3_97E0E100E7B4_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FF4BC25_830B_5629_41C3_97E0E100E7B4_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FF4BC25_830B_5629_41C3_97E0E100E7B4_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_9FF4BC25_830B_5629_41C3_97E0E100E7B4_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FF4BC25_830B_5629_41C3_97E0E100E7B4_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FF4BC25_830B_5629_41C3_97E0E100E7B4_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FF4BC25_830B_5629_41C3_97E0E100E7B4_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9FF4BC25_830B_5629_41C3_97E0E100E7B4_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FF4BC25_830B_5629_41C3_97E0E100E7B4_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FF4BC25_830B_5629_41C3_97E0E100E7B4_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FF4BC25_830B_5629_41C3_97E0E100E7B4_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9FF4BC25_830B_5629_41C3_97E0E100E7B4_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FF4BC25_830B_5629_41C3_97E0E100E7B4_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FF4BC25_830B_5629_41C3_97E0E100E7B4_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FF4BC25_830B_5629_41C3_97E0E100E7B4_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_9FF4BC25_830B_5629_41C3_97E0E100E7B4_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9FF4BC25_830B_5629_41C3_97E0E100E7B4_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FF4BC25_830B_5629_41C3_97E0E100E7B4_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FF4BC25_830B_5629_41C3_97E0E100E7B4_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FF4BC25_830B_5629_41C3_97E0E100E7B4_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_9FF4BC25_830B_5629_41C3_97E0E100E7B4_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FF4BC25_830B_5629_41C3_97E0E100E7B4_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FF4BC25_830B_5629_41C3_97E0E100E7B4_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FF4BC25_830B_5629_41C3_97E0E100E7B4_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "thumbnailUrl": "media/panorama_9FF4BC25_830B_5629_41C3_97E0E100E7B4_t.jpg"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -161.54,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_AE050E6A_8308_D23B_41D9_16C58FEB48C2"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 75.49,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_AE606E09_8308_D5F9_41DA_E27F46089011"
},
{
 "overlays": [
  "this.overlay_A56ECCDF_8309_F619_41D5_8D511D8DA04C",
  "this.overlay_AB5EC1E3_830B_2E29_41CE_A6CEE4592303",
  "this.overlay_AB8572EA_830B_D23B_418B_64AF28910075",
  "this.overlay_AB2E4B01_830B_53E9_41B9_11AFE213A889",
  "this.overlay_AAC4DDBA_830B_561B_41DE_7F27B0E7286A",
  "this.overlay_AB632E0E_8309_D5FB_41B2_A5F43D590064",
  "this.panorama_9FFCEF87_830B_52E9_41C4_593E824FCB4A_tcap0"
 ],
 "hfovMin": "120%",
 "label": "3B_Living 2",
 "id": "panorama_9FFCEF87_830B_52E9_41C4_593E824FCB4A",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 42.8,
   "yaw": -105.51,
   "distance": 1,
   "panorama": "this.panorama_9FFA5B2B_830B_7239_41BD_D27A6EA3EC79"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 101.62,
   "yaw": 51,
   "distance": 1,
   "panorama": "this.panorama_9FF45638_8308_F227_41DF_8B35BC612538"
  },
  {
   "panorama": "this.panorama_9FFB25D9_8308_D619_41CC_F93DB0C268CC",
   "class": "AdjacentPanorama"
  }
 ],
 "pitch": 0,
 "hfovMax": 130,
 "partial": false,
 "vfov": 180,
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "levels": [
     {
      "url": "media/panorama_9FFCEF87_830B_52E9_41C4_593E824FCB4A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FFCEF87_830B_52E9_41C4_593E824FCB4A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FFCEF87_830B_52E9_41C4_593E824FCB4A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FFCEF87_830B_52E9_41C4_593E824FCB4A_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_9FFCEF87_830B_52E9_41C4_593E824FCB4A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FFCEF87_830B_52E9_41C4_593E824FCB4A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FFCEF87_830B_52E9_41C4_593E824FCB4A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FFCEF87_830B_52E9_41C4_593E824FCB4A_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9FFCEF87_830B_52E9_41C4_593E824FCB4A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FFCEF87_830B_52E9_41C4_593E824FCB4A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FFCEF87_830B_52E9_41C4_593E824FCB4A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FFCEF87_830B_52E9_41C4_593E824FCB4A_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9FFCEF87_830B_52E9_41C4_593E824FCB4A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FFCEF87_830B_52E9_41C4_593E824FCB4A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FFCEF87_830B_52E9_41C4_593E824FCB4A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FFCEF87_830B_52E9_41C4_593E824FCB4A_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_9FFCEF87_830B_52E9_41C4_593E824FCB4A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9FFCEF87_830B_52E9_41C4_593E824FCB4A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FFCEF87_830B_52E9_41C4_593E824FCB4A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FFCEF87_830B_52E9_41C4_593E824FCB4A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FFCEF87_830B_52E9_41C4_593E824FCB4A_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_9FFCEF87_830B_52E9_41C4_593E824FCB4A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FFCEF87_830B_52E9_41C4_593E824FCB4A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FFCEF87_830B_52E9_41C4_593E824FCB4A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FFCEF87_830B_52E9_41C4_593E824FCB4A_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "thumbnailUrl": "media/panorama_9FFCEF87_830B_52E9_41C4_593E824FCB4A_t.jpg"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_9FF4BC25_830B_5629_41C3_97E0E100E7B4_camera"
},
{
 "overlays": [
  "this.overlay_A5F655EA_8319_563B_41D9_94C6041E5306",
  "this.overlay_A56DADEF_8319_D639_41B6_54B991D02976",
  "this.overlay_ABC21703_8307_D3E9_41D4_89C260269A69",
  "this.overlay_A4E02AFE_8307_521B_41DB_769057A3FA77",
  "this.panorama_9FFA5B2B_830B_7239_41BD_D27A6EA3EC79_tcap0"
 ],
 "hfovMin": "120%",
 "label": "3B_Living ",
 "id": "panorama_9FFA5B2B_830B_7239_41BD_D27A6EA3EC79",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -105.51,
   "yaw": 42.8,
   "distance": 1,
   "panorama": "this.panorama_9FFCEF87_830B_52E9_41C4_593E824FCB4A"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -17.33,
   "yaw": 113.18,
   "distance": 1,
   "panorama": "this.panorama_9FFB25D9_8308_D619_41CC_F93DB0C268CC"
  }
 ],
 "pitch": 0,
 "hfovMax": 130,
 "partial": false,
 "vfov": 180,
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "levels": [
     {
      "url": "media/panorama_9FFA5B2B_830B_7239_41BD_D27A6EA3EC79_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FFA5B2B_830B_7239_41BD_D27A6EA3EC79_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FFA5B2B_830B_7239_41BD_D27A6EA3EC79_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FFA5B2B_830B_7239_41BD_D27A6EA3EC79_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_9FFA5B2B_830B_7239_41BD_D27A6EA3EC79_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FFA5B2B_830B_7239_41BD_D27A6EA3EC79_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FFA5B2B_830B_7239_41BD_D27A6EA3EC79_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FFA5B2B_830B_7239_41BD_D27A6EA3EC79_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9FFA5B2B_830B_7239_41BD_D27A6EA3EC79_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FFA5B2B_830B_7239_41BD_D27A6EA3EC79_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FFA5B2B_830B_7239_41BD_D27A6EA3EC79_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FFA5B2B_830B_7239_41BD_D27A6EA3EC79_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9FFA5B2B_830B_7239_41BD_D27A6EA3EC79_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FFA5B2B_830B_7239_41BD_D27A6EA3EC79_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FFA5B2B_830B_7239_41BD_D27A6EA3EC79_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FFA5B2B_830B_7239_41BD_D27A6EA3EC79_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_9FFA5B2B_830B_7239_41BD_D27A6EA3EC79_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9FFA5B2B_830B_7239_41BD_D27A6EA3EC79_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FFA5B2B_830B_7239_41BD_D27A6EA3EC79_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FFA5B2B_830B_7239_41BD_D27A6EA3EC79_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FFA5B2B_830B_7239_41BD_D27A6EA3EC79_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_9FFA5B2B_830B_7239_41BD_D27A6EA3EC79_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FFA5B2B_830B_7239_41BD_D27A6EA3EC79_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FFA5B2B_830B_7239_41BD_D27A6EA3EC79_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FFA5B2B_830B_7239_41BD_D27A6EA3EC79_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "thumbnailUrl": "media/panorama_9FFA5B2B_830B_7239_41BD_D27A6EA3EC79_t.jpg"
},
{
 "overlays": [
  "this.overlay_A7EF06DA_8309_321B_41AB_C5DF1A3E1681",
  "this.overlay_A739FD2C_8307_563F_4176_868CE3386740",
  "this.overlay_A6DAD214_8318_EDEF_41DB_F1188EEF7E45",
  "this.overlay_A6074B84_831B_52EF_41CA_3CEE3EA95289",
  "this.overlay_A6171F00_831B_53E7_41CB_F1E3B6F9E83F",
  "this.overlay_A76F2392_831B_52EB_41DF_A6A2752D7F80",
  "this.panorama_9FFB25D9_8308_D619_41CC_F93DB0C268CC_tcap0"
 ],
 "hfovMin": "120%",
 "label": "3B_Dining",
 "id": "panorama_9FFB25D9_8308_D619_41CC_F93DB0C268CC",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 113.18,
   "yaw": -17.33,
   "distance": 1,
   "panorama": "this.panorama_9FFA5B2B_830B_7239_41BD_D27A6EA3EC79"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 20.85,
   "yaw": 67.82,
   "distance": 1,
   "panorama": "this.panorama_9FF45638_8308_F227_41DF_8B35BC612538"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -105.27,
   "yaw": 145.61,
   "distance": 1,
   "panorama": "this.panorama_9FF4BC25_830B_5629_41C3_97E0E100E7B4"
  }
 ],
 "pitch": 0,
 "hfovMax": 130,
 "partial": false,
 "vfov": 180,
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "levels": [
     {
      "url": "media/panorama_9FFB25D9_8308_D619_41CC_F93DB0C268CC_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FFB25D9_8308_D619_41CC_F93DB0C268CC_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FFB25D9_8308_D619_41CC_F93DB0C268CC_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FFB25D9_8308_D619_41CC_F93DB0C268CC_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_9FFB25D9_8308_D619_41CC_F93DB0C268CC_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FFB25D9_8308_D619_41CC_F93DB0C268CC_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FFB25D9_8308_D619_41CC_F93DB0C268CC_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FFB25D9_8308_D619_41CC_F93DB0C268CC_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9FFB25D9_8308_D619_41CC_F93DB0C268CC_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FFB25D9_8308_D619_41CC_F93DB0C268CC_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FFB25D9_8308_D619_41CC_F93DB0C268CC_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FFB25D9_8308_D619_41CC_F93DB0C268CC_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9FFB25D9_8308_D619_41CC_F93DB0C268CC_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FFB25D9_8308_D619_41CC_F93DB0C268CC_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FFB25D9_8308_D619_41CC_F93DB0C268CC_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FFB25D9_8308_D619_41CC_F93DB0C268CC_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_9FFB25D9_8308_D619_41CC_F93DB0C268CC_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9FFB25D9_8308_D619_41CC_F93DB0C268CC_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FFB25D9_8308_D619_41CC_F93DB0C268CC_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FFB25D9_8308_D619_41CC_F93DB0C268CC_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FFB25D9_8308_D619_41CC_F93DB0C268CC_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_9FFB25D9_8308_D619_41CC_F93DB0C268CC_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FFB25D9_8308_D619_41CC_F93DB0C268CC_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FFB25D9_8308_D619_41CC_F93DB0C268CC_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FFB25D9_8308_D619_41CC_F93DB0C268CC_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "thumbnailUrl": "media/panorama_9FFB25D9_8308_D619_41CC_F93DB0C268CC_t.jpg"
},
{
 "headerPaddingTop": 10,
 "contentOpaque": false,
 "borderRadius": 5,
 "id": "window_A4AE7ADD_8319_7219_41CE_6DCD644231E9",
 "paddingBottom": 0,
 "width": 200,
 "scrollBarWidth": 10,
 "verticalAlign": "middle",
 "headerBackgroundOpacity": 1,
 "titlePaddingLeft": 5,
 "backgroundColorRatios": [],
 "borderSize": 0,
 "shadowOpacity": 0.5,
 "closeButtonBorderRadius": 11,
 "paddingLeft": 0,
 "bodyPaddingLeft": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "shadowVerticalLength": 0,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "minHeight": 20,
 "bodyBorderSize": 0,
 "headerVerticalAlign": "middle",
 "titleTextDecoration": "none",
 "modal": true,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "closeButtonIconWidth": 12,
 "minWidth": 20,
 "backgroundColor": [],
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "gap": 10,
 "closeButtonIconHeight": 12,
 "height": 200,
 "closeButtonBackgroundColor": [],
 "title": "",
 "bodyPaddingBottom": 5,
 "scrollBarOpacity": 0.5,
 "bodyBackgroundOpacity": 1,
 "titlePaddingTop": 5,
 "bodyBackgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "paddingTop": 0,
 "headerPaddingBottom": 10,
 "shadow": true,
 "titlePaddingRight": 5,
 "titleFontColor": "#000000",
 "titleFontSize": "1.29vmin",
 "veilColorRatios": [
  0,
  1
 ],
 "headerBorderColor": "#000000",
 "backgroundOpacity": 1,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBorderSize": 0,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "veilColorDirection": "horizontal",
 "layout": "vertical",
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "children": [
  "this.htmlText_A4A80ADE_8319_721B_41D3_438C49F0990A"
 ],
 "shadowColor": "#000000",
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "titleFontWeight": "normal",
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "closeButtonIconLineWidth": 2,
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "class": "Window",
 "overflow": "scroll",
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "shadowHorizontalLength": 3,
 "horizontalAlign": "center",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "backgroundColorDirection": "vertical",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "footerHeight": 5,
 "titleFontStyle": "normal",
 "titleFontFamily": "Arial",
 "closeButtonIconColor": "#000000",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "data": {
  "name": "Window41942"
 },
 "closeButtonBackgroundColorRatios": [],
 "shadowBlurRadius": 6,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_9FFC29FA_830B_3E1B_41DE_5FC76247E707_camera"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_9FFAF41F_830B_F619_41D6_F2B2E7CC9978_camera"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 74.49,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_AEAFEDBD_8308_D619_41B7_486882FACC96"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -112.18,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_AE7D5DFF_8308_D619_417D_3FB3598A3047"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_9D3D8091_8309_2EE9_41DE_7148C3CEECCE_camera"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_9FFA41DF_8309_6E19_418B_D455F8292C87_camera"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 140.94,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 1,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 358,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 1,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_AE082E75_8308_D229_41D5_7B6C1DA55D1B"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -159.15,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 1,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 358,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 1,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_AE229E4A_8308_D27B_4179_9741CB5CF14E"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 60.42,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_ADE55E8B_8308_D2F9_41D3_7D050042536E"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 148.85,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_AE494E35_8308_D229_41D5_90B37F3AA173"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -66.82,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_AE3C2E3F_8308_D219_41DD_172EA43B9014"
},
{
 "data": {
  "label": "Promotional_Background_Music_Background_Music_For_Video_d2Q3e56iJGs_140"
 },
 "class": "MediaAudio",
 "id": "audio_ADF53E7D_830B_5219_41C2_93C8CD92002E",
 "audio": {
  "oggUrl": "media/audio_ADF53E7D_830B_5219_41C2_93C8CD92002E.ogg",
  "mp3Url": "media/audio_ADF53E7D_830B_5219_41C2_93C8CD92002E.mp3",
  "class": "AudioResource"
 },
 "autoplay": true
},
{
 "overlays": [
  "this.overlay_A7EB0BFF_8308_D219_41D3_02D7778B2B90",
  "this.overlay_A735FED2_830F_726B_41E0_029DF383AE11",
  "this.overlay_A1748C88_830F_F6E7_41D8_1D45D09D7B25",
  "this.overlay_A0A434C1_830F_5669_41DC_5492AB1EEC0D",
  "this.overlay_A75F2CE9_830B_5639_41DD_04EA07D4CBDB",
  "this.overlay_A72D449E_8308_D61B_41C5_68F56FD84974",
  "this.overlay_A7BFC6DC_8309_321F_41C3_F28DF4EE688E",
  "this.overlay_A74A8D9A_8309_361B_41B3_18DEB2B678BB",
  "this.panorama_9FF7E741_8308_D269_41CA_B8E85FB7482B_tcap0",
  "this.overlay_AA8FE511_8318_F7E8_41D6_E2C41A5C5581"
 ],
 "hfovMin": "120%",
 "label": "3B_Corridor 3",
 "id": "panorama_9FF7E741_8308_D269_41CA_B8E85FB7482B",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 142.19,
   "yaw": -132.9,
   "distance": 1,
   "panorama": "this.panorama_9FFAF41F_830B_F619_41D6_F2B2E7CC9978"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 125.11,
   "yaw": -104.51,
   "distance": 1,
   "panorama": "this.panorama_9FE1A188_8309_6EE7_41BE_AC1F6CB72330"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -161.03,
   "yaw": -37.68,
   "distance": 1,
   "panorama": "this.panorama_9FFA41DF_8309_6E19_418B_D455F8292C87"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -31.15,
   "yaw": 124.86,
   "distance": 1,
   "panorama": "this.panorama_9D3D8091_8309_2EE9_41DE_7148C3CEECCE"
  },
  {
   "panorama": "this.panorama_9FF45638_8308_F227_41DF_8B35BC612538",
   "class": "AdjacentPanorama"
  }
 ],
 "pitch": 0,
 "hfovMax": 130,
 "partial": false,
 "vfov": 180,
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "levels": [
     {
      "url": "media/panorama_9FF7E741_8308_D269_41CA_B8E85FB7482B_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FF7E741_8308_D269_41CA_B8E85FB7482B_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FF7E741_8308_D269_41CA_B8E85FB7482B_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FF7E741_8308_D269_41CA_B8E85FB7482B_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_9FF7E741_8308_D269_41CA_B8E85FB7482B_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FF7E741_8308_D269_41CA_B8E85FB7482B_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FF7E741_8308_D269_41CA_B8E85FB7482B_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FF7E741_8308_D269_41CA_B8E85FB7482B_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9FF7E741_8308_D269_41CA_B8E85FB7482B_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FF7E741_8308_D269_41CA_B8E85FB7482B_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FF7E741_8308_D269_41CA_B8E85FB7482B_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FF7E741_8308_D269_41CA_B8E85FB7482B_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9FF7E741_8308_D269_41CA_B8E85FB7482B_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FF7E741_8308_D269_41CA_B8E85FB7482B_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FF7E741_8308_D269_41CA_B8E85FB7482B_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FF7E741_8308_D269_41CA_B8E85FB7482B_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_9FF7E741_8308_D269_41CA_B8E85FB7482B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9FF7E741_8308_D269_41CA_B8E85FB7482B_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FF7E741_8308_D269_41CA_B8E85FB7482B_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FF7E741_8308_D269_41CA_B8E85FB7482B_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FF7E741_8308_D269_41CA_B8E85FB7482B_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_9FF7E741_8308_D269_41CA_B8E85FB7482B_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FF7E741_8308_D269_41CA_B8E85FB7482B_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FF7E741_8308_D269_41CA_B8E85FB7482B_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FF7E741_8308_D269_41CA_B8E85FB7482B_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "thumbnailUrl": "media/panorama_9FF7E741_8308_D269_41CA_B8E85FB7482B_t.jpg"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_9FE1A188_8309_6EE7_41BE_AC1F6CB72330_camera"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 167.46,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_AEA45DB3_8308_D629_41DF_8F779AA5F7F5"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -137.2,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_ADBE7EC2_8308_D26B_41C6_EB1AACF6D058"
},
{
 "overlays": [
  "this.overlay_A29D4A5C_830B_521F_41CC_0453457A3A23",
  "this.overlay_A00DC49F_8309_D619_41D7_4CC805E7BA6C",
  "this.overlay_A1D183E9_8308_D239_41E0_74A542E910C5",
  "this.overlay_A0907AEC_8307_523F_41D1_9A7C6AD42C1E",
  "this.overlay_A79138E1_8307_5E29_41D6_C2DC47E925C5",
  "this.overlay_A1159A4F_8379_3279_41A6_AF49CEE78E85",
  "this.overlay_A0FB8298_837B_D2E7_41BB_636805544387",
  "this.overlay_A160BAD1_8379_3269_41D7_743B1BC5830D",
  "this.overlay_A14EC6A6_8379_F22B_41DC_31D2321DFA69",
  "this.panorama_9FF45638_8308_F227_41DF_8B35BC612538_tcap0"
 ],
 "hfovMin": "120%",
 "label": "3B_Corridor",
 "id": "panorama_9FF45638_8308_F227_41DF_8B35BC612538",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 13.57,
   "yaw": 158.65,
   "distance": 1,
   "panorama": "this.panorama_9FFFBD09_830B_37F9_41DC_3EBCD7285018"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 13.57,
   "yaw": -141.94,
   "distance": 1,
   "panorama": "this.panorama_9FFFBD09_830B_37F9_41DC_3EBCD7285018"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": -18.46,
   "yaw": -69.59,
   "distance": 1,
   "panorama": "this.panorama_9FFA37AB_8309_3239_41D3_CA81E34B0E4C"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 51,
   "yaw": 101.62,
   "distance": 1,
   "panorama": "this.panorama_9FFCEF87_830B_52E9_41C4_593E824FCB4A"
  },
  {
   "class": "AdjacentPanorama",
   "backwardYaw": 67.82,
   "yaw": 20.85,
   "distance": 1,
   "panorama": "this.panorama_9FFB25D9_8308_D619_41CC_F93DB0C268CC"
  }
 ],
 "pitch": 0,
 "hfovMax": 130,
 "partial": false,
 "vfov": 180,
 "class": "Panorama",
 "frames": [
  {
   "back": {
    "levels": [
     {
      "url": "media/panorama_9FF45638_8308_F227_41DF_8B35BC612538_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FF45638_8308_F227_41DF_8B35BC612538_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FF45638_8308_F227_41DF_8B35BC612538_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FF45638_8308_F227_41DF_8B35BC612538_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_9FF45638_8308_F227_41DF_8B35BC612538_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FF45638_8308_F227_41DF_8B35BC612538_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FF45638_8308_F227_41DF_8B35BC612538_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FF45638_8308_F227_41DF_8B35BC612538_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_9FF45638_8308_F227_41DF_8B35BC612538_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FF45638_8308_F227_41DF_8B35BC612538_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FF45638_8308_F227_41DF_8B35BC612538_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FF45638_8308_F227_41DF_8B35BC612538_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_9FF45638_8308_F227_41DF_8B35BC612538_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FF45638_8308_F227_41DF_8B35BC612538_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FF45638_8308_F227_41DF_8B35BC612538_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FF45638_8308_F227_41DF_8B35BC612538_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_9FF45638_8308_F227_41DF_8B35BC612538_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_9FF45638_8308_F227_41DF_8B35BC612538_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FF45638_8308_F227_41DF_8B35BC612538_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FF45638_8308_F227_41DF_8B35BC612538_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FF45638_8308_F227_41DF_8B35BC612538_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_9FF45638_8308_F227_41DF_8B35BC612538_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "tags": "ondemand",
      "colCount": 6,
      "height": 3072,
      "rowCount": 6
     },
     {
      "url": "media/panorama_9FF45638_8308_F227_41DF_8B35BC612538_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "colCount": 3,
      "height": 1536,
      "rowCount": 3
     },
     {
      "url": "media/panorama_9FF45638_8308_F227_41DF_8B35BC612538_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "colCount": 2,
      "height": 1024,
      "rowCount": 2
     },
     {
      "url": "media/panorama_9FF45638_8308_F227_41DF_8B35BC612538_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "height": 512,
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "thumbnailUrl": "media/panorama_9FF45638_8308_F227_41DF_8B35BC612538_t.jpg"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_9FE27220_830B_D227_41DC_E4092263681F_camera"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -78.38,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 1,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 358,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 1,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_ADA4CECE_8308_D27B_41A2_D72C712202C3"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -143.07,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 1,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 358,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 1,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_ADCB8EB8_8308_D227_41D5_A9FFA4674043"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 161.54,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 1,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 358,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 1,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_AE81FDE8_8308_D627_41B0_8F2ED857BC04"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_9FF7E741_8308_D269_41CA_B8E85FB7482B_camera"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_9FFA5B2B_830B_7239_41BD_D27A6EA3EC79_camera"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -34.39,
  "pitch": 0,
  "hfov": 100
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_ADFE6E80_8308_D2E7_41CB_93BC9820FDFB"
},
{
 "toolTipDisplayTime": 600,
 "borderRadius": 0,
 "id": "MainViewer",
 "paddingBottom": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "left": 0,
 "width": "100%",
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarLeft": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 5,
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#FFFFFF",
 "minHeight": 50,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "displayTooltipInTouchScreens": true,
 "minWidth": 100,
 "toolTipOpacity": 0.5,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 13,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarRight": 0,
 "transitionDuration": 500,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 7,
 "height": "100%",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 6,
 "paddingTop": 0,
 "progressBarBorderRadius": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "transitionMode": "blending",
 "paddingRight": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipFontFamily": "Georgia",
 "class": "ViewerArea",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "playbackBarHeadShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "top": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 55,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 },
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 7,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 10,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ]
},
{
 "backgroundOpacity": 0,
 "layout": "absolute",
 "borderRadius": 0,
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "paddingBottom": 0,
 "width": 115.05,
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "paddingLeft": 0,
 "class": "Container",
 "overflow": "scroll",
 "minHeight": 1,
 "top": "0%",
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "height": 641,
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "contentOpaque": false,
 "data": {
  "name": "--SETTINGS"
 },
 "shadow": false
},
{
 "toolTipDisplayTime": 600,
 "borderRadius": 0,
 "id": "MapViewer",
 "paddingBottom": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "playbackBarHeadShadowBlurRadius": 3,
 "left": "0.06%",
 "width": "24.125%",
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarLeft": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "progressBarBorderColor": "#0066FF",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#FFFFFF",
 "minHeight": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "displayTooltipInTouchScreens": true,
 "minWidth": 1,
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarRight": 0,
 "transitionDuration": 500,
 "playbackBarHeight": 10,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "height": "37.622%",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 6,
 "paddingTop": 0,
 "progressBarBorderRadius": 0,
 "shadow": false,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "transitionMode": "blending",
 "paddingRight": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipFontFamily": "Arial",
 "class": "ViewerArea",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadShadow": true,
 "bottom": "7.14%",
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "progressBottom": 2,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Floor Plan"
 },
 "toolTipBorderSize": 1,
 "visible": false,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ]
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "HTMLText_77A45D69_68E7_70A0_4199_7C23092E161A",
 "paddingBottom": 10,
 "width": "12.364%",
 "scrollBarWidth": 10,
 "left": "2.11%",
 "propagateClick": false,
 "paddingRight": 10,
 "borderSize": 3,
 "paddingLeft": 10,
 "class": "HTMLText",
 "minHeight": 1,
 "top": "5.19%",
 "scrollBarColor": "#000000",
 "borderColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "height": "6.811%",
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:30px;font-family:'Montserrat Medium';\"><B>ENTRANCE</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "Entrance"
 },
 "shadow": false,
 "visible": false
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "HTMLText_77FFE780_68A3_305F_4195_72CF03F77028",
 "paddingBottom": 10,
 "width": "12.364%",
 "scrollBarWidth": 10,
 "left": "2.11%",
 "propagateClick": false,
 "paddingRight": 10,
 "borderSize": 3,
 "paddingLeft": 10,
 "class": "HTMLText",
 "minHeight": 1,
 "top": "5.19%",
 "scrollBarColor": "#000000",
 "borderColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "height": "6.811%",
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:30px;\"><B>Living Room</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "Living Room"
 },
 "shadow": false,
 "visible": false
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "HTMLText_77D88A2F_68A3_30A2_41D9_6B88F2278A2E",
 "paddingBottom": 10,
 "width": "12.364%",
 "scrollBarWidth": 10,
 "left": "2.11%",
 "propagateClick": false,
 "paddingRight": 10,
 "borderSize": 3,
 "paddingLeft": 10,
 "class": "HTMLText",
 "minHeight": 1,
 "top": "5.19%",
 "scrollBarColor": "#000000",
 "borderColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "height": "6.811%",
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:30px;\"><B>Kitchen</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "Kitchen"
 },
 "shadow": false,
 "visible": false
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "HTMLText_77A79D0B_68A3_3061_41C8_63D21A41AF16",
 "paddingBottom": 10,
 "width": "12.364%",
 "scrollBarWidth": 10,
 "left": "2.11%",
 "propagateClick": false,
 "paddingRight": 10,
 "borderSize": 3,
 "paddingLeft": 10,
 "class": "HTMLText",
 "minHeight": 1,
 "top": "5.19%",
 "scrollBarColor": "#000000",
 "borderColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "height": "6.811%",
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:30px;\"><B>Bedroom 1</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "Bedroom 1"
 },
 "shadow": false,
 "visible": false
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "HTMLText_77B00E30_68A3_30BF_41D9_695DB12B0431",
 "paddingBottom": 10,
 "width": "12.364%",
 "scrollBarWidth": 10,
 "left": "2.11%",
 "propagateClick": false,
 "paddingRight": 10,
 "borderSize": 3,
 "paddingLeft": 10,
 "class": "HTMLText",
 "minHeight": 1,
 "top": "5.19%",
 "scrollBarColor": "#000000",
 "borderColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "height": "6.811%",
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:30px;\"><B>Bedroom 2</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "Bedroom 2"
 },
 "shadow": false,
 "visible": false
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "HTMLText_77824F54_68A3_30E7_41C8_29B1863B932A",
 "paddingBottom": 10,
 "width": "12.364%",
 "scrollBarWidth": 10,
 "left": "2.11%",
 "propagateClick": false,
 "paddingRight": 10,
 "borderSize": 3,
 "paddingLeft": 10,
 "class": "HTMLText",
 "minHeight": 1,
 "top": "5.19%",
 "scrollBarColor": "#000000",
 "borderColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "height": "6.811%",
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:30px;\"><B>Bathroom</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "Bathroom"
 },
 "shadow": false,
 "visible": false
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "paddingBottom": 0,
 "width": 58,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "class": "IconButton",
 "minHeight": 1,
 "horizontalAlign": "center",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "data": {
  "name": "IconButton MUTE"
 },
 "shadow": false
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "paddingBottom": 0,
 "width": 58,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "class": "IconButton",
 "minHeight": 1,
 "horizontalAlign": "center",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "shadow": false
},
{
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FFFBD09_830B_37F9_41DC_3EBCD7285018_1_HS_0_1_0_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FFFBD09_830B_37F9_41DC_3EBCD7285018_1_HS_0_2_1_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FFFBD09_830B_37F9_41DC_3EBCD7285018_1_HS_0_3_4_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FFFBD09_830B_37F9_41DC_3EBCD7285018_1_HS_0_4_5_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9FF45638_8308_F227_41DF_8B35BC612538, this.camera_AECB4D86_8308_D6EB_41C0_DEE2DFE1D2F3); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_A032CD51_8309_3669_41D6_348F394CE29E",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 12.77,
   "yaw": -7.07,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FFFBD09_830B_37F9_41DC_3EBCD7285018_1_HS_1_0_6_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.38,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AC97411B_8318_EE19_41D3_F5BB377C8F23",
   "yaw": -7.07,
   "pitch": -40.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 12.77
  }
 ],
 "id": "overlay_A27C88D9_8309_DE19_41DC_B3B4BEB14DC4",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "inertia": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_9FFFBD09_830B_37F9_41DC_3EBCD7285018_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 15,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_9FFFBD09_830B_37F9_41DC_3EBCD7285018_tcap0",
 "distance": 50
},
{
 "maps": [
  {
   "hfov": 38.19,
   "yaw": -161.03,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FFA41DF_8309_6E19_418B_D455F8292C87_1_HS_0_1_0_map.gif",
      "width": 81,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.84,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9FF7E741_8308_D269_41CA_B8E85FB7482B, this.camera_AE1C8E5F_8308_D219_41DE_F048B2F68835); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_A40B5DD0_830F_5667_41CF_5A07A09A20BC",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 4.38,
   "yaw": -164.99,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FFA41DF_8309_6E19_418B_D455F8292C87_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.15,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AC7AE123_8318_EE29_41DB_B4F5E0E3A48F",
   "yaw": -164.99,
   "pitch": 5.15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 4.38
  }
 ],
 "id": "overlay_A907D2FC_8309_F21F_41C4_B8A71EFD55B7",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "inertia": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_9FFFBD09_830B_37F9_41DC_3EBCD7285018_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 15,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_9FFA41DF_8309_6E19_418B_D455F8292C87_tcap0",
 "distance": 50
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "paddingBottom": 0,
 "width": 58,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "minHeight": 1,
 "horizontalAlign": "center",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "transparencyActive": true,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "data": {
  "name": "IconButton VR"
 },
 "shadow": false,
 "visible": false
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "paddingBottom": 0,
 "width": 58,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "class": "IconButton",
 "minHeight": 1,
 "horizontalAlign": "center",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "data": {
  "name": "IconButton HS "
 },
 "shadow": false
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "paddingBottom": 0,
 "width": 58,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "class": "IconButton",
 "minHeight": 1,
 "horizontalAlign": "center",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "transparencyActive": true,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "data": {
  "name": "IconButton GYRO"
 },
 "shadow": false
},
{
 "maps": [
  {
   "hfov": 90,
   "yaw": 90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FE1A188_8309_6EE7_41BE_AC1F6CB72330_1_HS_0_1_1_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": -180,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FE1A188_8309_6EE7_41BE_AC1F6CB72330_1_HS_0_2_2_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FE1A188_8309_6EE7_41BE_AC1F6CB72330_1_HS_0_3_4_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FE1A188_8309_6EE7_41BE_AC1F6CB72330_1_HS_0_4_5_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9FF7E741_8308_D269_41CA_B8E85FB7482B, this.camera_AE606E09_8308_D5F9_41DA_E27F46089011); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_A45708B6_8308_FE2B_41D6_6AA19A6C5790",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 4.37,
   "yaw": 123.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FE1A188_8309_6EE7_41BE_AC1F6CB72330_1_HS_1_0_6_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.65,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AC657123_8318_EE29_41DC_1E3BD7DE307F",
   "yaw": 123.91,
   "pitch": 5.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 4.37
  }
 ],
 "id": "overlay_AA4C5DA1_830F_5629_41D1_E52CAC883B8D",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "inertia": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_9FFFBD09_830B_37F9_41DC_3EBCD7285018_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 15,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_9FE1A188_8309_6EE7_41BE_AC1F6CB72330_tcap0",
 "distance": 50
},
{
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FFE2858_830B_DE67_41C5_89D5A3C71A44_1_HS_0_1_0_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FFE2858_830B_DE67_41C5_89D5A3C71A44_1_HS_0_2_1_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": -90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FFE2858_830B_DE67_41C5_89D5A3C71A44_1_HS_0_3_3_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FFE2858_830B_DE67_41C5_89D5A3C71A44_1_HS_0_4_4_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FFE2858_830B_DE67_41C5_89D5A3C71A44_1_HS_0_5_5_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9FFAF41F_830B_F619_41D6_F2B2E7CC9978, this.camera_AE050E6A_8308_D23B_41D9_16C58FEB48C2); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_AA33165E_833F_521B_41D6_230F5D751CD4",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 3.07,
   "yaw": -9.39,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FFE2858_830B_DE67_41C5_89D5A3C71A44_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.73,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B392D94D_830F_7E79_41DD_E3BC8390654D",
   "yaw": -9.39,
   "pitch": -2.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 3.07
  }
 ],
 "id": "overlay_A80D2343_833F_3269_41D3_1CB00F155E88",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "inertia": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_9FFFBD09_830B_37F9_41DC_3EBCD7285018_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 15,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_9FFE2858_830B_DE67_41C5_89D5A3C71A44_tcap0",
 "distance": 50
},
{
 "maps": [
  {
   "hfov": 83.63,
   "yaw": -119.58,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FE27220_830B_D227_41DC_E4092263681F_1_HS_0_1_0_map.gif",
      "width": 104,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.58,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9FFAF41F_830B_F619_41D6_F2B2E7CC9978, this.camera_AEB5DD92_8308_D6EB_41D3_708668C7F24B); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_ABF4A0FE_8308_EE1B_41CB_A6A1CAFAD508",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 6.94,
   "yaw": -118.2,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FE27220_830B_D227_41DC_E4092263681F_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 9.48,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FE27220_830B_D227_41DC_E4092263681F_1_HS_1_0.png",
      "width": 160,
      "height": 154,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "hfov": 6.94,
   "yaw": -118.2,
   "pitch": 9.48
  }
 ],
 "id": "overlay_AB2E8D27_8309_7629_41CA_76E348EB90CF",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "inertia": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_9FFFBD09_830B_37F9_41DC_3EBCD7285018_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 15,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_9FE27220_830B_D227_41DC_E4092263681F_tcap0",
 "distance": 50
},
{
 "maps": [
  {
   "hfov": 65,
   "yaw": -31.15,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9D3D8091_8309_2EE9_41DE_7148C3CEECCE_1_HS_0_1_0_map.gif",
      "width": 96,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.73,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9FF7E741_8308_D269_41CA_B8E85FB7482B, this.camera_ADA8DED9_8308_D219_41DB_6D3C45671116); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_A9ED6FD8_833B_3267_41D7_722705687820",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 6.07,
   "yaw": -26.63,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9D3D8091_8309_2EE9_41DE_7148C3CEECCE_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 17,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 15.01,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9D3D8091_8309_2EE9_41DE_7148C3CEECCE_1_HS_1_0.png",
      "width": 142,
      "height": 154,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "hfov": 6.07,
   "yaw": -26.63,
   "pitch": 15.01
  }
 ],
 "id": "overlay_AF43CCD2_833B_766B_41C1_D5B85B44D2F9",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "inertia": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_9FFFBD09_830B_37F9_41DC_3EBCD7285018_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 15,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_9D3D8091_8309_2EE9_41DE_7148C3CEECCE_tcap0",
 "distance": 50
},
{
 "maps": [
  {
   "hfov": 76.03,
   "yaw": 96.22,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FFC29FA_830B_3E1B_41DE_5FC76247E707_1_HS_0_1_0_map.gif",
      "width": 116,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.54,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9FFA37AB_8309_3239_41D3_CA81E34B0E4C, this.camera_ADCB8EB8_8308_D227_41D5_A9FFA4674043); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_A9DB2C52_8338_F66B_41CA_6DE552C1D247",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 5.99,
   "yaw": 99.36,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FFC29FA_830B_3E1B_41DE_5FC76247E707_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.22,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AC795125_8318_EE29_4194_1CB395DF0AF7",
   "yaw": 99.36,
   "pitch": 6.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.99
  }
 ],
 "id": "overlay_AFD51948_8339_FE67_41DF_6B34A984A321",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "inertia": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_9FFFBD09_830B_37F9_41DC_3EBCD7285018_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 15,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_9FFC29FA_830B_3E1B_41DE_5FC76247E707_tcap0",
 "distance": 50
},
{
 "maps": [
  {
   "hfov": 61.18,
   "yaw": 149.6,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FFA37AB_8309_3239_41D3_CA81E34B0E4C_1_HS_0_1_0_map.gif",
      "width": 67,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.01,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_A1612E4E_837F_327B_41D6_CFA501BD6FE3",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 13.04,
   "yaw": 162.04,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FFA37AB_8309_3239_41D3_CA81E34B0E4C_1_HS_1_0_0_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.34,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AC6A211C_8318_EE1F_41D3_71D4A9E3F84B",
   "yaw": 162.04,
   "pitch": -19.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 13.04
  }
 ],
 "id": "overlay_A0F26355_8378_D269_4191_64CA0006B2DD",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FFA37AB_8309_3239_41D3_CA81E34B0E4C_1_HS_2_1_0_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FFA37AB_8309_3239_41D3_CA81E34B0E4C_1_HS_2_2_1_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FFA37AB_8309_3239_41D3_CA81E34B0E4C_1_HS_2_3_4_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FFA37AB_8309_3239_41D3_CA81E34B0E4C_1_HS_2_4_5_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9FFC29FA_830B_3E1B_41DE_5FC76247E707, this.camera_AEBB2DA7_8308_D629_41E0_2307ADEE77C5); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_A1C4BBA8_8379_F227_41DD_D850124BA5DF",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 7.06,
   "yaw": 33.66,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FFA37AB_8309_3239_41D3_CA81E34B0E4C_1_HS_3_0_6_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 14.26,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AC6BA11D_8318_EE19_41C2_4E860E49A2AF",
   "yaw": 33.66,
   "pitch": 14.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 7.06
  }
 ],
 "id": "overlay_A0EBE9C9_8379_3E79_41DE_FFD7F11F72FA",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "maps": [
  {
   "hfov": 16.39,
   "yaw": -39.06,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FFA37AB_8309_3239_41D3_CA81E34B0E4C_1_HS_4_1_6_map.gif",
      "width": 31,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.12,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9FF4BC25_830B_5629_41C3_97E0E100E7B4, this.camera_AEA45DB3_8308_D629_41DF_8F779AA5F7F5); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_A1591781_837B_D2E9_41C2_1CE9CD026DD6",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 6.53,
   "yaw": -37.81,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FFA37AB_8309_3239_41D3_CA81E34B0E4C_1_HS_5_0_6_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.69,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AC6B111D_8318_EE19_41D9_37D065902412",
   "yaw": -37.81,
   "pitch": 0.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 6.53
  }
 ],
 "id": "overlay_A7C61436_8378_D62B_41AE_B45764C036F9",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "maps": [
  {
   "hfov": 28.38,
   "yaw": -18.46,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FFA37AB_8309_3239_41D3_CA81E34B0E4C_1_HS_6_1_6_map.gif",
      "width": 98,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.58,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9FF45638_8308_F227_41DF_8B35BC612538, this.camera_AEB16D9C_8308_D61F_41DA_1362F0896227); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_A7EEB863_8379_DE29_419E_D9D35742AD62",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 12.44,
   "yaw": -20.13,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FFA37AB_8309_3239_41D3_CA81E34B0E4C_1_HS_7_0_6_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.18,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AC68911D_8318_EE19_41DB_614E18E5CE4A",
   "yaw": -20.13,
   "pitch": -25.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 12.44
  }
 ],
 "id": "overlay_A0FEA1BB_8379_6E19_41AE_95B5B01A9D58",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "inertia": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_9FFFBD09_830B_37F9_41DC_3EBCD7285018_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 15,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_9FFA37AB_8309_3239_41D3_CA81E34B0E4C_tcap0",
 "distance": 50
},
{
 "maps": [
  {
   "hfov": 38.2,
   "yaw": 142.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FFAF41F_830B_F619_41D6_F2B2E7CC9978_1_HS_0_1_0_map.gif",
      "width": 97,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.15,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9FF7E741_8308_D269_41CA_B8E85FB7482B, this.camera_ADDE9EA1_8308_D229_41DE_EDBCAB317CC2); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_ABAF8B99_8309_3219_41C0_6306A6E48FBC",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 3.51,
   "yaw": 139.8,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FFAF41F_830B_F619_41D6_F2B2E7CC9978_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.33,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B390D94C_830F_7E7F_41D8_60109F481DE8",
   "yaw": 139.8,
   "pitch": 4.33,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 3.51
  }
 ],
 "id": "overlay_ABAC6D67_8307_3629_41DA_D3F95AEDF731",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "maps": [
  {
   "hfov": 90,
   "yaw": -180,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FFAF41F_830B_F619_41D6_F2B2E7CC9978_1_HS_2_1_2_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FFAF41F_830B_F619_41D6_F2B2E7CC9978_1_HS_2_2_4_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FFAF41F_830B_F619_41D6_F2B2E7CC9978_1_HS_2_3_5_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9FE27220_830B_D227_41DC_E4092263681F, this.camera_ADE55E8B_8308_D2F9_41D3_7D050042536E); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_AA1E07C0_8338_F267_419B_85A1E26059A8",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 7.23,
   "yaw": -170.96,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FFAF41F_830B_F619_41D6_F2B2E7CC9978_1_HS_3_0_6_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 16.39,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FFAF41F_830B_F619_41D6_F2B2E7CC9978_1_HS_3_0.png",
      "width": 171,
      "height": 171,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "hfov": 7.23,
   "yaw": -170.96,
   "pitch": 16.39
  }
 ],
 "id": "overlay_AA65524C_8339_727F_4191_7BC006A93119",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "maps": [
  {
   "hfov": 16.54,
   "yaw": 170.45,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FFAF41F_830B_F619_41D6_F2B2E7CC9978_1_HS_4_1_6_map.gif",
      "width": 24,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.73,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9FE27220_830B_D227_41DC_E4092263681F, this.camera_ADEB9E96_8308_D2EB_41D2_66C34D12E4D6); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_AA34A295_833B_52E9_41CE_F995CDC4DACF",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 103.92,
   "yaw": 18.46,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FFAF41F_830B_F619_41D6_F2B2E7CC9978_1_HS_5_1_6_map.gif",
      "width": 114,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.61,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9FFE2858_830B_DE67_41C5_89D5A3C71A44, this.camera_ADC56EAC_8308_D23F_4160_11322080D4A5); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_AF278D3B_833B_5619_419D_4C47D6E31E89",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 3.05,
   "yaw": 29.11,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FFAF41F_830B_F619_41D6_F2B2E7CC9978_0_HS_6_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.78,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B392694D_830F_7E79_41B5_98739AB31974",
   "yaw": 29.11,
   "pitch": -7.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 3.05
  }
 ],
 "id": "overlay_A9BD50D8_8339_6E67_41DC_867E37F9AFC3",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "inertia": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_9FFFBD09_830B_37F9_41DC_3EBCD7285018_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 15,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_9FFAF41F_830B_F619_41D6_F2B2E7CC9978_tcap0",
 "distance": 50
},
{
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FF4BC25_830B_5629_41C3_97E0E100E7B4_0_HS_0_1_0_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": -180,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FF4BC25_830B_5629_41C3_97E0E100E7B4_0_HS_0_2_2_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": -90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FF4BC25_830B_5629_41C3_97E0E100E7B4_0_HS_0_3_3_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FF4BC25_830B_5629_41C3_97E0E100E7B4_0_HS_0_4_4_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FF4BC25_830B_5629_41C3_97E0E100E7B4_0_HS_0_5_5_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9FFB25D9_8308_D619_41CC_F93DB0C268CC, this.camera_ADFE6E80_8308_D2E7_41CB_93BC9820FDFB); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_A6E5C69B_8319_F219_41DE_2B85C45BE36E",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 33.62,
   "yaw": -12.54,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FF4BC25_830B_5629_41C3_97E0E100E7B4_0_HS_1_1_6_map.gif",
      "width": 107,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.55,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9FFA37AB_8309_3239_41D3_CA81E34B0E4C, this.camera_AE082E75_8308_D229_41D5_7B6C1DA55D1B); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_A6AB91DA_831F_EE1B_41B3_136DA54898C4",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 3.07,
   "yaw": -9.39,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FF4BC25_830B_5629_41C3_97E0E100E7B4_1_HS_2_0_6_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.73,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AC6DD11F_8318_EE19_41E0_65EFCE37B07D",
   "yaw": -9.39,
   "pitch": -1.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 3.07
  }
 ],
 "id": "overlay_A5EB3E9B_8318_F219_41DD_F4E92DD38D2B",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "maps": [
  {
   "hfov": 4.39,
   "yaw": 96.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FF4BC25_830B_5629_41C3_97E0E100E7B4_1_HS_3_0_6_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.63,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_A4AE7ADD_8319_7219_41CE_6DCD644231E9, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AC6D911F_8318_EE19_41D3_525A0C2A47BF",
   "yaw": 96.78,
   "pitch": -1.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 4.39
  }
 ],
 "id": "overlay_A597BDBE_8319_D61B_41DE_56B9C10CD0B1",
 "data": {
  "label": "Info 02"
 }
},
{
 "inertia": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_9FFFBD09_830B_37F9_41DC_3EBCD7285018_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 15,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_9FF4BC25_830B_5629_41C3_97E0E100E7B4_tcap0",
 "distance": 50
},
{
 "maps": [
  {
   "hfov": 3.33,
   "yaw": -97.52,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FF4BC25_830B_5629_41C3_97E0E100E7B4_0_HS_4_0_6_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.93,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3949949_830F_7E79_41D5_26A248CBA365",
   "yaw": -97.52,
   "pitch": -18.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 3.33
  }
 ],
 "id": "overlay_A967BAF0_8309_5227_41DB_99E5278D708B",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "maps": [
  {
   "hfov": 83.07,
   "yaw": 51,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FFCEF87_830B_52E9_41C4_593E824FCB4A_1_HS_0_1_0_map.gif",
      "width": 142,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.16,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9FF45638_8308_F227_41DF_8B35BC612538, this.camera_ADA4CECE_8308_D27B_41A2_D72C712202C3); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_A56ECCDF_8309_F619_41D5_8D511D8DA04C",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 62.68,
   "yaw": 131.51,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FFCEF87_830B_52E9_41C4_593E824FCB4A_1_HS_1_1_0_map.gif",
      "width": 148,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.32,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_AB5EC1E3_830B_2E29_41CE_A6CEE4592303",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 3.07,
   "yaw": 47.13,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FFCEF87_830B_52E9_41C4_593E824FCB4A_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.98,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AC656122_8318_EE2B_41DC_27EEEC39A0F4",
   "yaw": 47.13,
   "pitch": -2.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 3.07
  }
 ],
 "id": "overlay_AB8572EA_830B_D23B_418B_64AF28910075",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "maps": [
  {
   "hfov": 3.07,
   "yaw": -118.45,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FFCEF87_830B_52E9_41C4_593E824FCB4A_1_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.21,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AC649123_8318_EE29_41D6_3EE84807D5D2",
   "yaw": -118.45,
   "pitch": -4.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 3.07
  }
 ],
 "id": "overlay_AB2E4B01_830B_53E9_41B9_11AFE213A889",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "maps": [
  {
   "hfov": 3.08,
   "yaw": 148.58,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FFCEF87_830B_52E9_41C4_593E824FCB4A_1_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.34,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AC644123_8318_EE29_41C8_43901CF779CC",
   "yaw": 148.58,
   "pitch": -1.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 3.08
  }
 ],
 "id": "overlay_AAC4DDBA_830B_561B_41DE_7F27B0E7286A",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "maps": [
  {
   "hfov": 106.97,
   "yaw": -105.51,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FFCEF87_830B_52E9_41C4_593E824FCB4A_0_HS_5_1_0_map.gif",
      "width": 166,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.96,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9FFA5B2B_830B_7239_41BD_D27A6EA3EC79, this.camera_ADBE7EC2_8308_D26B_41C6_EB1AACF6D058); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_AB632E0E_8309_D5FB_41B2_A5F43D590064",
 "data": {
  "label": "Polygon"
 }
},
{
 "inertia": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_9FFFBD09_830B_37F9_41DC_3EBCD7285018_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 15,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_9FFCEF87_830B_52E9_41C4_593E824FCB4A_tcap0",
 "distance": 50
},
{
 "maps": [
  {
   "hfov": 85.76,
   "yaw": 42.8,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FFA5B2B_830B_7239_41BD_D27A6EA3EC79_1_HS_0_1_0_map.gif",
      "width": 200,
      "height": 154,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.67,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9FFCEF87_830B_52E9_41C4_593E824FCB4A, this.camera_AEAFEDBD_8308_D619_41B7_486882FACC96); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_A5F655EA_8319_563B_41D9_94C6041E5306",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 45.17,
   "yaw": 113.18,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FFA5B2B_830B_7239_41BD_D27A6EA3EC79_1_HS_1_1_0_map.gif",
      "width": 144,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.61,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9FFB25D9_8308_D619_41CC_F93DB0C268CC, this.camera_AE966DC8_8308_D667_41D4_19CD83F5FFD0); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_A56DADEF_8319_D639_41B6_54B991D02976",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 3.05,
   "yaw": 62.46,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FFA5B2B_830B_7239_41BD_D27A6EA3EC79_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.75,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AC646122_8318_EE2B_41DF_7F26895F00A2",
   "yaw": 62.46,
   "pitch": -6.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 3.05
  }
 ],
 "id": "overlay_ABC21703_8307_D3E9_41D4_89C260269A69",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "maps": [
  {
   "hfov": 3.05,
   "yaw": 119.47,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FFA5B2B_830B_7239_41BD_D27A6EA3EC79_1_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.02,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AC642122_8318_EE2B_418C_03A62D69A273",
   "yaw": 119.47,
   "pitch": -7.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 3.05
  }
 ],
 "id": "overlay_A4E02AFE_8307_521B_41DB_769057A3FA77",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "inertia": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_9FFFBD09_830B_37F9_41DC_3EBCD7285018_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 15,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_9FFA5B2B_830B_7239_41BD_D27A6EA3EC79_tcap0",
 "distance": 50
},
{
 "maps": [
  {
   "hfov": 54.88,
   "yaw": 67.82,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FFB25D9_8308_D619_41CC_F93DB0C268CC_0_HS_0_1_0_map.gif",
      "width": 119,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.67,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9FF45638_8308_F227_41DF_8B35BC612538, this.camera_AE229E4A_8308_D27B_4179_9741CB5CF14E); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_A7EF06DA_8309_321B_41AB_C5DF1A3E1681",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 67.7,
   "yaw": 145.61,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FFB25D9_8308_D619_41CC_F93DB0C268CC_0_HS_1_1_0_map.gif",
      "width": 82,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.08,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9FF4BC25_830B_5629_41C3_97E0E100E7B4, this.camera_AE29CE53_8308_D269_41D3_BA21DAB95E4C); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_A739FD2C_8307_563F_4176_868CE3386740",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 3.51,
   "yaw": 148.13,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FFB25D9_8308_D619_41CC_F93DB0C268CC_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.51,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3AA1947_830F_7E69_41D9_C59471C6525B",
   "yaw": 148.13,
   "pitch": -2.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 3.51
  }
 ],
 "id": "overlay_A6DAD214_8318_EDEF_41DB_F1188EEF7E45",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "maps": [
  {
   "hfov": 3.5,
   "yaw": -30.52,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FFB25D9_8308_D619_41CC_F93DB0C268CC_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.46,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3AA4947_830F_7E69_41D5_CB61FD6B1E39",
   "yaw": -30.52,
   "pitch": -4.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 3.5
  }
 ],
 "id": "overlay_A6074B84_831B_52EF_41CA_3CEE3EA95289",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "maps": [
  {
   "hfov": 3.5,
   "yaw": 77.37,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FFB25D9_8308_D619_41CC_F93DB0C268CC_0_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.7,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3AA8948_830F_7E67_41DD_0445326A2362",
   "yaw": 77.37,
   "pitch": -4.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 3.5
  }
 ],
 "id": "overlay_A6171F00_831B_53E7_41CB_F1E3B6F9E83F",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "maps": [
  {
   "hfov": 77.13,
   "yaw": -17.33,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FFB25D9_8308_D619_41CC_F93DB0C268CC_0_HS_5_1_0_map.gif",
      "width": 176,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.01,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9FFA5B2B_830B_7239_41BD_D27A6EA3EC79, this.camera_AE3C2E3F_8308_D219_41DD_172EA43B9014); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_A76F2392_831B_52EB_41DF_A6A2752D7F80",
 "data": {
  "label": "Polygon"
 }
},
{
 "inertia": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_9FFFBD09_830B_37F9_41DC_3EBCD7285018_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 15,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_9FFB25D9_8308_D619_41CC_F93DB0C268CC_tcap0",
 "distance": 50
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "htmlText_A4A80ADE_8319_721B_41D3_438C49F0990A",
 "paddingBottom": 10,
 "width": "100%",
 "scrollBarWidth": 10,
 "propagateClick": false,
 "borderSize": 0,
 "paddingLeft": 10,
 "paddingRight": 10,
 "class": "HTMLText",
 "minHeight": 0,
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "height": "100%",
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:25px;font-family:'Montserrat';\">Helper's Room</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText41943"
 },
 "shadow": false
},
{
 "maps": [
  {
   "hfov": 105.81,
   "yaw": -37.68,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FF7E741_8308_D269_41CA_B8E85FB7482B_1_HS_0_1_0_map.gif",
      "width": 135,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.78,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9FFA41DF_8309_6E19_418B_D455F8292C87, this.camera_AE40CE29_8308_D239_41DA_5ACF6BE261DF); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_A7EB0BFF_8308_D219_41D3_02D7778B2B90",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 90,
   "yaw": 90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FF7E741_8308_D269_41CA_B8E85FB7482B_1_HS_1_1_1_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": -180,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FF7E741_8308_D269_41CA_B8E85FB7482B_1_HS_1_2_2_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FF7E741_8308_D269_41CA_B8E85FB7482B_1_HS_1_3_4_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FF7E741_8308_D269_41CA_B8E85FB7482B_1_HS_1_4_5_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9D3D8091_8309_2EE9_41DE_7148C3CEECCE, this.camera_AE494E35_8308_D229_41D5_90B37F3AA173); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_A735FED2_830F_726B_41E0_029DF383AE11",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 25.32,
   "yaw": -104.51,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FF7E741_8308_D269_41CA_B8E85FB7482B_1_HS_2_1_6_map.gif",
      "width": 38,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.37,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9FE1A188_8309_6EE7_41BE_AC1F6CB72330, this.camera_AE5DBE1F_8308_D219_41D1_E1F6B1196BED); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_A1748C88_830F_F6E7_41D8_1D45D09D7B25",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 34.86,
   "yaw": -132.9,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FF7E741_8308_D269_41CA_B8E85FB7482B_1_HS_3_1_6_map.gif",
      "width": 100,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.84,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9FFAF41F_830B_F619_41D6_F2B2E7CC9978, this.camera_AE577E14_8308_D5EF_41DF_DE58F4CA7915); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_A0A434C1_830F_5669_41DC_5492AB1EEC0D",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 7.1,
   "yaw": 121.21,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FF7E741_8308_D269_41CA_B8E85FB7482B_1_HS_4_0_6_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 19.66,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FF7E741_8308_D269_41CA_B8E85FB7482B_1_HS_4_0.png",
      "width": 171,
      "height": 171,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "hfov": 7.1,
   "yaw": 121.21,
   "pitch": 19.66
  }
 ],
 "id": "overlay_A75F2CE9_830B_5639_41DD_04EA07D4CBDB",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "maps": [
  {
   "hfov": 4.35,
   "yaw": -35.61,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FF7E741_8308_D269_41CA_B8E85FB7482B_0_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.91,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3A8B946_830F_7E6B_4190_DC2EE7DCCE46",
   "yaw": -35.61,
   "pitch": 7.91,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 4.35
  }
 ],
 "id": "overlay_A72D449E_8308_D61B_41C5_68F56FD84974",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "maps": [
  {
   "hfov": 5.4,
   "yaw": -131.08,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FF7E741_8308_D269_41CA_B8E85FB7482B_0_HS_7_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.63,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3A8C946_830F_7E6B_41C4_7046BE768C59",
   "yaw": -131.08,
   "pitch": 0.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.4
  }
 ],
 "id": "overlay_A7BFC6DC_8309_321F_41C3_F28DF4EE688E",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "maps": [
  {
   "hfov": 4.39,
   "yaw": -107.46,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FF7E741_8308_D269_41CA_B8E85FB7482B_0_HS_8_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.89,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B3A90947_830F_7E69_41D2_3563F77928A6",
   "yaw": -107.46,
   "pitch": 1.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 4.39
  }
 ],
 "id": "overlay_A74A8D9A_8309_361B_41B3_18DEB2B678BB",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "inertia": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_9FFFBD09_830B_37F9_41DC_3EBCD7285018_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 15,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_9FF7E741_8308_D269_41CA_B8E85FB7482B_tcap0",
 "distance": 50
},
{
 "maps": [
  {
   "hfov": 62.36,
   "yaw": 45.22,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FF7E741_8308_D269_41CA_B8E85FB7482B_0_HS_9_1_0_map.gif",
      "width": 94,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.51,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_AA8FE511_8318_F7E8_41D6_E2C41A5C5581",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 90,
   "yaw": -180,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FF45638_8308_F227_41DF_8B35BC612538_1_HS_0_1_2_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FF45638_8308_F227_41DF_8B35BC612538_1_HS_0_2_4_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FF45638_8308_F227_41DF_8B35BC612538_1_HS_0_3_5_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9FFFBD09_830B_37F9_41DC_3EBCD7285018, this.camera_AE91EDD2_8308_D66B_41D4_D1C5E7A8DD77); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_A29D4A5C_830B_521F_41CC_0453457A3A23",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 90,
   "yaw": -180,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FF45638_8308_F227_41DF_8B35BC612538_1_HS_1_1_2_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": -90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FF45638_8308_F227_41DF_8B35BC612538_1_HS_1_2_3_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FF45638_8308_F227_41DF_8B35BC612538_1_HS_1_3_4_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FF45638_8308_F227_41DF_8B35BC612538_1_HS_1_4_5_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9FFFBD09_830B_37F9_41DC_3EBCD7285018, this.camera_AE99DDDD_8308_D619_41C6_7294D0122D59); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_A00DC49F_8309_D619_41D7_4CC805E7BA6C",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 13.62,
   "yaw": -158.93,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FF45638_8308_F227_41DF_8B35BC612538_1_HS_2_0_6_map.gif",
      "width": 61,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -40.89,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AC94311B_8318_EE19_41DF_D7BE9CAA86E2",
   "yaw": -158.93,
   "pitch": -40.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 13.62
  }
 ],
 "id": "overlay_A1D183E9_8308_D239_41E0_74A542E910C5",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "maps": [
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FF45638_8308_F227_41DF_8B35BC612538_1_HS_3_1_0_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": -90,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FF45638_8308_F227_41DF_8B35BC612538_1_HS_3_2_3_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FF45638_8308_F227_41DF_8B35BC612538_1_HS_3_3_4_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 90,
   "class": "HotspotPanoramaOverlayMap"
  },
  {
   "hfov": 90,
   "yaw": 0,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FF45638_8308_F227_41DF_8B35BC612538_1_HS_3_4_5_map.gif",
      "width": 200,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -90,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9FFA37AB_8309_3239_41D3_CA81E34B0E4C, this.camera_AE81FDE8_8308_D627_41B0_8F2ED857BC04); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_A0907AEC_8307_523F_41D1_9A7C6AD42C1E",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 89.75,
   "yaw": 20.85,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FF45638_8308_F227_41DF_8B35BC612538_1_HS_4_1_6_map.gif",
      "width": 104,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.84,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9FFB25D9_8308_D619_41CC_F93DB0C268CC, this.camera_AE7D5DFF_8308_D619_417D_3FB3598A3047); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_A79138E1_8307_5E29_41D6_C2DC47E925C5",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 8.19,
   "yaw": -71.42,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FF45638_8308_F227_41DF_8B35BC612538_1_HS_5_0_6_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.78,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AC95811C_8318_EE1F_41B9_3C71A0AE1000",
   "yaw": -71.42,
   "pitch": -18.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 8.19
  }
 ],
 "id": "overlay_A1159A4F_8379_3279_41A6_AF49CEE78E85",
 "data": {
  "label": "Circle Point 02c"
 }
},
{
 "maps": [
  {
   "hfov": 65.93,
   "yaw": 101.62,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FF45638_8308_F227_41DF_8B35BC612538_1_HS_6_1_6_map.gif",
      "width": 91,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_9FFCEF87_830B_52E9_41C4_593E824FCB4A, this.camera_AE74FDF4_8308_D62F_41A6_ECC812EE14EF); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "id": "overlay_A0FB8298_837B_D2E7_41BB_636805544387",
 "data": {
  "label": "Polygon"
 }
},
{
 "maps": [
  {
   "hfov": 2.63,
   "yaw": 14.45,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FF45638_8308_F227_41DF_8B35BC612538_1_HS_7_0_6_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.17,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AC6AF11C_8318_EE1F_41C5_B42EBA543C31",
   "yaw": 14.45,
   "pitch": -3.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 2.63
  }
 ],
 "id": "overlay_A160BAD1_8379_3269_41D7_743B1BC5830D",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "maps": [
  {
   "hfov": 2.55,
   "yaw": 93.15,
   "image": {
    "levels": [
     {
      "url": "media/panorama_9FF45638_8308_F227_41DF_8B35BC612538_1_HS_8_0_6_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_AC6AC11C_8318_EE1F_4194_886BE536938A",
   "yaw": 93.15,
   "pitch": -15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 2.55
  }
 ],
 "id": "overlay_A14EC6A6_8379_F22B_41DC_31D2321DFA69",
 "data": {
  "label": "Circle 03c"
 }
},
{
 "inertia": false,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_9FFFBD09_830B_37F9_41DC_3EBCD7285018_tcap0.png",
    "width": 500,
    "height": 500,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "hfov": 15,
 "class": "TripodCapPanoramaOverlay",
 "rotate": false,
 "id": "panorama_9FF45638_8308_F227_41DF_8B35BC612538_tcap0",
 "distance": 50
},
{
 "backgroundOpacity": 0,
 "layout": "horizontal",
 "borderRadius": 0,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "paddingBottom": 0,
 "width": 110,
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "paddingRight": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "class": "Container",
 "overflow": "visible",
 "minHeight": 1,
 "top": "0%",
 "horizontalAlign": "center",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "height": 110,
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "contentOpaque": false,
 "data": {
  "name": "button menu sup"
 },
 "shadow": false
},
{
 "layout": "vertical",
 "borderRadius": 0,
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "paddingBottom": 0,
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC"
 ],
 "scrollBarWidth": 10,
 "right": "0%",
 "propagateClick": true,
 "verticalAlign": "top",
 "paddingRight": 0,
 "borderSize": 0,
 "width": "91.304%",
 "overflow": "scroll",
 "paddingLeft": 0,
 "class": "Container",
 "minHeight": 1,
 "horizontalAlign": "center",
 "scrollBarColor": "#000000",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "bottom": "0%",
 "scrollBarOpacity": 0.5,
 "gap": 3,
 "scrollBarMargin": 2,
 "height": "85.959%",
 "paddingTop": 0,
 "contentOpaque": false,
 "data": {
  "name": "-button set"
 },
 "shadow": false,
 "visible": false,
 "backgroundOpacity": 0
},
{
 "levels": [
  {
   "url": "media/panorama_9FFFBD09_830B_37F9_41DC_3EBCD7285018_1_HS_1_0.png",
   "width": 1080,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_AC97411B_8318_EE19_41D3_F5BB377C8F23",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_9FFA41DF_8309_6E19_418B_D455F8292C87_1_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_AC7AE123_8318_EE29_41DB_B4F5E0E3A48F",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_9FE1A188_8309_6EE7_41BE_AC1F6CB72330_1_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_AC657123_8318_EE29_41DC_1E3BD7DE307F",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_9FFE2858_830B_DE67_41C5_89D5A3C71A44_0_HS_1_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 22,
 "rowCount": 6,
 "id": "AnimatedImageResource_B392D94D_830F_7E79_41DD_E3BC8390654D",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_9FFC29FA_830B_3E1B_41DE_5FC76247E707_1_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_AC795125_8318_EE29_4194_1CB395DF0AF7",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_9FFA37AB_8309_3239_41D3_CA81E34B0E4C_1_HS_1_0.png",
   "width": 1080,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_AC6A211C_8318_EE1F_41D3_71D4A9E3F84B",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_9FFA37AB_8309_3239_41D3_CA81E34B0E4C_1_HS_3_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_AC6BA11D_8318_EE19_41C2_4E860E49A2AF",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_9FFA37AB_8309_3239_41D3_CA81E34B0E4C_1_HS_5_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_AC6B111D_8318_EE19_41D9_37D065902412",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_9FFA37AB_8309_3239_41D3_CA81E34B0E4C_1_HS_7_0.png",
   "width": 1080,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_AC68911D_8318_EE19_41DB_614E18E5CE4A",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_9FFAF41F_830B_F619_41D6_F2B2E7CC9978_0_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_B390D94C_830F_7E7F_41D8_60109F481DE8",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_9FFAF41F_830B_F619_41D6_F2B2E7CC9978_0_HS_6_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 22,
 "rowCount": 6,
 "id": "AnimatedImageResource_B392694D_830F_7E79_41B5_98739AB31974",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_9FF4BC25_830B_5629_41C3_97E0E100E7B4_1_HS_2_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_AC6DD11F_8318_EE19_41E0_65EFCE37B07D",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_9FF4BC25_830B_5629_41C3_97E0E100E7B4_1_HS_3_0.png",
   "width": 460,
   "height": 690,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_AC6D911F_8318_EE19_41D3_525A0C2A47BF",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_9FF4BC25_830B_5629_41C3_97E0E100E7B4_0_HS_4_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 22,
 "rowCount": 6,
 "id": "AnimatedImageResource_B3949949_830F_7E79_41D5_26A248CBA365",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_9FFCEF87_830B_52E9_41C4_593E824FCB4A_1_HS_2_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 22,
 "rowCount": 6,
 "id": "AnimatedImageResource_AC656122_8318_EE2B_41DC_27EEEC39A0F4",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_9FFCEF87_830B_52E9_41C4_593E824FCB4A_1_HS_3_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 22,
 "rowCount": 6,
 "id": "AnimatedImageResource_AC649123_8318_EE29_41D6_3EE84807D5D2",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_9FFCEF87_830B_52E9_41C4_593E824FCB4A_1_HS_4_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 22,
 "rowCount": 6,
 "id": "AnimatedImageResource_AC644123_8318_EE29_41C8_43901CF779CC",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_9FFA5B2B_830B_7239_41BD_D27A6EA3EC79_1_HS_2_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 22,
 "rowCount": 6,
 "id": "AnimatedImageResource_AC646122_8318_EE2B_41DF_7F26895F00A2",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_9FFA5B2B_830B_7239_41BD_D27A6EA3EC79_1_HS_3_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 22,
 "rowCount": 6,
 "id": "AnimatedImageResource_AC642122_8318_EE2B_418C_03A62D69A273",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_9FFB25D9_8308_D619_41CC_F93DB0C268CC_0_HS_2_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 22,
 "rowCount": 6,
 "id": "AnimatedImageResource_B3AA1947_830F_7E69_41D9_C59471C6525B",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_9FFB25D9_8308_D619_41CC_F93DB0C268CC_0_HS_3_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 22,
 "rowCount": 6,
 "id": "AnimatedImageResource_B3AA4947_830F_7E69_41D5_CB61FD6B1E39",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_9FFB25D9_8308_D619_41CC_F93DB0C268CC_0_HS_4_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 22,
 "rowCount": 6,
 "id": "AnimatedImageResource_B3AA8948_830F_7E67_41DD_0445326A2362",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_9FF7E741_8308_D269_41CA_B8E85FB7482B_0_HS_5_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_B3A8B946_830F_7E6B_4190_DC2EE7DCCE46",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_9FF7E741_8308_D269_41CA_B8E85FB7482B_0_HS_7_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_B3A8C946_830F_7E6B_41C4_7046BE768C59",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_9FF7E741_8308_D269_41CA_B8E85FB7482B_0_HS_8_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_B3A90947_830F_7E69_41D2_3563F77928A6",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_9FF45638_8308_F227_41DF_8B35BC612538_1_HS_2_0.png",
   "width": 1080,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_AC94311B_8318_EE19_41DF_D7BE9CAA86E2",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_9FF45638_8308_F227_41DF_8B35BC612538_1_HS_5_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 21,
 "rowCount": 6,
 "id": "AnimatedImageResource_AC95811C_8318_EE1F_41B9_3C71A0AE1000",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_9FF45638_8308_F227_41DF_8B35BC612538_1_HS_7_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 22,
 "rowCount": 6,
 "id": "AnimatedImageResource_AC6AF11C_8318_EE1F_41C5_B42EBA543C31",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "levels": [
  {
   "url": "media/panorama_9FF45638_8308_F227_41DF_8B35BC612538_1_HS_8_0.png",
   "width": 1000,
   "height": 1500,
   "class": "ImageResourceLevel"
  }
 ],
 "frameDuration": 41,
 "frameCount": 22,
 "rowCount": 6,
 "id": "AnimatedImageResource_AC6AC11C_8318_EE1F_4194_886BE536938A",
 "colCount": 4,
 "class": "AnimatedImageResource"
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "paddingBottom": 0,
 "width": 60,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "class": "IconButton",
 "minHeight": 1,
 "horizontalAlign": "center",
 "height": 60,
 "minWidth": 1,
 "mode": "toggle",
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "transparencyActive": true,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "data": {
  "name": "image button menu"
 },
 "shadow": false
},
{
 "cursor": "hand",
 "borderRadius": 0,
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "paddingBottom": 0,
 "width": 58,
 "backgroundOpacity": 0,
 "propagateClick": true,
 "paddingRight": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "class": "IconButton",
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "minHeight": 1,
 "horizontalAlign": "center",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "click": "this.openLink('https://www.instagram.com/kefitaaddis/', '_blank')",
 "transparencyActive": true,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "data": {
  "name": "IconButton TWITTER"
 },
 "shadow": false
}],
 "horizontalAlign": "left",
 "scrollBarColor": "#000000",
 "mobileMipmappingEnabled": false,
 "minWidth": 20,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "registerKey": function(key, value){  window[key] = value; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getKey": function(key){  return window[key]; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "unregisterKey": function(key){  delete window[key]; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "existsKey": function(key){  return key in window; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; }
 },
 "contentOpaque": false,
 "data": {
  "name": "Player468"
 },
 "shadow": false,
 "vrPolyfillScale": 1,
 "height": "100%",
 "downloadEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
