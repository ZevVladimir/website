# Resetting License
- The license to access the server expires every 90 days. Tried automating this briefly but failed probably worth retrying
```bash
tailscale cert truenas-scale-1.tail6da954.ts.net
cat truenas-scale-1.tail6da954.ts.net.crt
cat truenas-scale-1.tail6da954.ts.net.key
```
- Copy both the outputs entirely including the beginning and ending marks and both certificates
- Go to truenas_scale gui
- Go to Credentials -> Certificates
- Click add in the Certificates box
	- For name something like tailscale_cert_renewed_YYYYMMDD
	- For type: Import certificate
	- Click next
	- Paste the .crt output into certificate and .key output into private key
	- Click next and then save
- Go to Apps -> WebDAV
- Click Edit next to application info
- Scroll down to Network Configuration and then Certificate. Then select the new certificate
- Then re-verify server on Zotero