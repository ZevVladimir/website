# Brainstorm
- Take photos from immich on nas
- Slideshow mode
- Sending photos mode
- Access from phone or computer to add or remove or send photos
- Matte LCD screen? Less glare
- Make a wooden frame?
- Raspberry pi 
- Auto turn on and off, motion sensor option
# Hardware
[BOM](https://docs.google.com/spreadsheets/d/17T7EfYfLGM4YOccNTRTEJtbnncgehKhikzinLbWU5UU/edit?gid=0#gid=0)
- [ ] #TODO Create a plan for the frame/shadow box [due:: 2026-05-15] #Hobby
## Lenovo Tablet
Tablet Dimensions: 9.6" x 6.0" x 0.3"
Frame 1.5" all sides
Add extra space for cord 0.5"
Add a rabbet to slot the tablet in 0.25"
Frame dimensions:
$$\begin{align}
9.6''+2\cdot1.5''+0.5''-2\cdot0.25'' & \times6.0''+2\cdot1.5''-2\cdot0.25''\times0.5'' \\
12.6'' & \times 8.5''\times0.5''
\end{align}$$
Kickstand: length of 7-8''. Start at 8? and shorten as needed
- Would need to angle the bottom
- Add a hinge to connect it on the top
- Have a string/chain to connect it on the bottom
Add picture frame clips to hold the tablet tightly in
# Software
- https://www.pimmich.ovh/index_en.html 
- Immich

## Setting up app on Truenas scale
- Create a dataset for appdata under main_data set the dataset preset to Apps
- Create a subdataset under appdata under immich-kiosk set the dataset preset to Apps
- Create a subdataset under appdata under immich-server set the dataset preset to Apps
- Go to Apps
- Go to Discover Apps
- Click the 3 vertical dots next to custom app
- Click Install via YAML
- Name it (e.g. immich-kiosk)
- For the IP use the base truenas one not the tailscale one
- 

Personal API key:  QW1WUkqcyW3TPVmoHZw6ptQuCtmJdMVMYXW975Z0M
Album ID: 142c248d-31ff-47f6-a108-07a9dda9deb8
Open weather API: b7d23d94f6cfc9ed81ea3e6f22960748