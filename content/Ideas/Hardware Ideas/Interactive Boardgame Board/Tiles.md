#### Requirements

| Name                                     | Reason                                                                                                                | Feasible? | Method of Implementation                                                                                                     | Concerns                                                                           |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Hexagonal                                | Better tiling, more applicable to board games                                                                         | Yes       | Design them hexagonally !                                                                                                    |                                                                                    |
| 3D Printable                             | Easier to prototype and make many. Can get my own printer                                                             | Yes       | Keep the design simple and use filament that is easily available/cheap                                                       |                                                                                    |
| 2” Side length                           | Small enough to have a bunch of them but big enough to hold all components                                            | Maybe     |                                                                                                                              | Is this large enough for all the components?                                       |
| LEDS within                              | Lights are cool, could allow for cool features of a boardgame                                                         | Yes       | Have a groove along the side for the lights to slot into                                                                     |                                                                                    |
| Light diffusive material                 | See the light                                                                                                         | Yes       | Use some filament that is good for this                                                                                      | What filament?                                                                     |
| Tiles are modular and easily connectable | Be able to easily create a board and have it _just work._ No need to fiddle with what goes where that can be software | Maybe     | Use magnetic connectors. Design my own with small magnets and POGO pins?                                                     | How can I pass everything through (power, information, physical connection)        |
| Connections are cheap                    | I don’t got that much money… and want this scalable                                                                   | Maybe     | Make my own stuff where possible, use resources on campus                                                                    | Magnets and other connectors can get expensive especially when you need 6 per tile |
| Know which tile is connected where       | This will allow for control over lighting and recreating the tiles in software                                        | Maybe     | Use NFC chips? Can I build this in somehow to the magnetic connector?                                                        | Would require one for each side so I would know which side connects where          |
| Power connection                         | Need power for each tile                                                                                              | Yes       | Through the magnetic connections power can be passed through?                                                                | Is that possible…                                                                  |
| Power source                             | Need to get power from somewhere                                                                                      | Yes       | Use a computer if we already going to be plugged in to that?  <br>Or have some sort of main connector that can be plugged in | Supplying enough power                                                             |

  
  

# Things to look into

[https://www.adafruit.com/category/168](https://www.adafruit.com/category/168)

ESP Microcontrollers

[https://www.adafruit.com/product/5526](https://www.adafruit.com/product/5526)

# Tile Connection

## Physical Connection

1. Buckyball magnets
    1. [https://terragons.com/](https://terragons.com/) does this and their tiles seem to be very similar to what I want to do
        1. From [https://www.reddit.com/r/battletech/comments/15k8yjs/gencon_loot_tarragon_terrain/](https://www.reddit.com/r/battletech/comments/15k8yjs/gencon_loot_tarragon_terrain/):
            
            > Each hex has 6 tiny BB magnets, which lets them stack or tile very smoothly. The tiles don't _quite_ snap into place if you slide them across the table at each other, but it's very close. If you get them within 1/4" they will just click into place in a very satisfying way. You could assemble a map of these very quickly, no fuss. Stacks stay together well enough to pick up a dozen or so with magnetism, making it _exceptionally easy_ to swap out tiles in the middle of a map. This is one of my greatest frustrations with any tile system, and it's just _solved_.
            
    2. This guy also made modular tiles which use bb magnets. The key is that they are able to freely move so they can line up well [https://www.youtube.com/watch?v=61nM848H7cM](https://www.youtube.com/watch?v=61nM848H7cM) (~25min in)
2. Physical lock
    1. Would have to determine layout for how tiles can be connected on all sides
    2. Would require another method of getting power and data through
3. Magnets + pogo pins
    
    1. Would have to confirm that N-S polarities can work
    
    [https://www.mill-max.com/products/new/maxneticr-spring-loaded-connectors](https://www.mill-max.com/products/new/maxneticr-spring-loaded-connectors)
    
    [https://www.amazon.com/Magnetic-Connector-Location-8Pin-Connectors/dp/B0D44Y8789?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&smid=A1P5BZC47DTFKM&th=1](https://www.amazon.com/Magnetic-Connector-Location-8Pin-Connectors/dp/B0D44Y8789?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&smid=A1P5BZC47DTFKM&th=1)
    
    [https://www.amazon.com/Magnetic-Connector-Pogopin-Through-Connectors/dp/B0CSX6ZQ1H?dib=eyJ2IjoiMSJ9.7BjmSuEHuGD-xV0FOiYDWhAvdHzgs05ZMWLvOIos8n2xphPNAB_ue1sjtJWawn9G8vqcjZd5SxOlJ-HWm-6k5PSge5xhf671Iqb1wGeRX77u-HaiUucPtTWZCGaR4eYWic9uCLnqDzqkbXk3nfM8x14JFuNC86XnGhnHl1W03fyXNwCqk4owqVu74-wE7hfPGIs2JUMoMzbpPuvCmGkbHQWFkzaL1oml_XLmpFCdCkhFC8cjXeSp7o8FcQe20MFYCwYBiIub7mqlG6BFM842a2iFtYsXf7gsCQ82GOrkIiU.14ggRZjPu9nO9c14l5VmE84Qul3dcVNskpWniYbn1yw&dib_tag=se&keywords=magnetic%2Bconnector&qid=1731043167&sr=8-7&th=1](https://www.amazon.com/Magnetic-Connector-Pogopin-Through-Connectors/dp/B0CSX6ZQ1H?dib=eyJ2IjoiMSJ9.7BjmSuEHuGD-xV0FOiYDWhAvdHzgs05ZMWLvOIos8n2xphPNAB_ue1sjtJWawn9G8vqcjZd5SxOlJ-HWm-6k5PSge5xhf671Iqb1wGeRX77u-HaiUucPtTWZCGaR4eYWic9uCLnqDzqkbXk3nfM8x14JFuNC86XnGhnHl1W03fyXNwCqk4owqVu74-wE7hfPGIs2JUMoMzbpPuvCmGkbHQWFkzaL1oml_XLmpFCdCkhFC8cjXeSp7o8FcQe20MFYCwYBiIub7mqlG6BFM842a2iFtYsXf7gsCQ82GOrkIiU.14ggRZjPu9nO9c14l5VmE84Qul3dcVNskpWniYbn1yw&dib_tag=se&keywords=magnetic%2Bconnector&qid=1731043167&sr=8-7&th=1)
    

## Power and Data Connection

  

# Control