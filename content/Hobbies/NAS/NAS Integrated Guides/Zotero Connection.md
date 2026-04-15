---
Linux Integration: Done
Phone Integration: Not Currently Possible
Windows Integration: Done
---
# Current Method
Make use of Zotero's ability to sync with [[WebDAV]]
- Set up a tailscale_cert (have to renew this every few months just follow this and create a new key)
	- In tailscale admin console
	- Go to DNS
	- Enable magicDNS and HTTPS Certificates
	- Go to the tailscale shell on truenas and do the command ` tailscale cert truenas-scale-1.tail6da954.ts.net`
	- Using more or some other command copy the full cert and key 
	- Go to truenas scales credentials -> certificates and add a Certificate
	- Give name and set type to import
	- Copy paste the full cert and then the key
	- Then confirm
- Installed webDAV app on truenas
	- Set https port bind mode to publish port on the host for external access
	- Port number 30036
	- Set certificate to tailscale_cert certificate
		- If renewing set to the renewed certificate
			- [[WebDAV]] has instructions
- In Zotero
	- Go to settings
	- Go to Sync
	- Set sync attachment files in my library using WebDAV
	- set the url to ` https://truenas-scale-1.tail6da954.ts.net:30036/zotero/ `
	- Use username and password in Bitwarden for webDAV
- This method does download the pdfs to the local computer but as needed they can be deleted locally without (i think) deleting the real copy on the NAS
	- This is also fine since they shouldn't take up an absurd amount of room and allows us to bypass Zotero's restrictions on their sync
# OLD METHOD
Hosting files on NAS at /mnt/main_data/zotero

Can then access these files by the following steps:Install ZotMoov [https://github.com/wileyyugioh/zotmoov](https://github.com/wileyyugioh/zotmoov)

  

1. Install Zotero from the tarball [https://www.zotero.org/support/installation](https://www.zotero.org/support/installation)
2. Install ZotMoov [https://github.com/wileyyugioh/zotmoov](https://github.com/wileyyugioh/zotmoov)
3. Set up file that accesses the files on the NAS
    1. **Linux Specific**
        
        1. Make sure not using the snap version (can’t be sandboxed)
        
        ```Bash
        sudo mkdir -p /mnt/zotero_storage
        sudo mount -t nfs 100.91.221.27:/mnt/main_data/zotero /mnt/zotero_storage
        ls /mnt/zotero_storage  # confirm contents visible
        192.168.4.106:/mnt/main_data/zotero /mnt/zotero_storage nfs defaults,_netdev,nofail,x-systemd.automount 0 0
        ```
        
    2. **Windows Specific**
        1. Go to File Explorer
        2. Right click This PC
        3. Map network drive
        4. In folder enter “\\\100.91.221.27\zotero”
        5. Login using “wuser”’s credentials
4. Configure ZotMoov
    1. In Zotero after installing ZotMoov
    2. Go to Edit→Settings→ZotMoov
    3. In Directory to Move/Copy Files To choose the directory where the NAS zotero info is located. For windows should be Z:/ (or what you named when mapping the network drive) and for linux should be /mnt/zotero_storage/
    4. Select automatically move/copy files to subdirectory
5. Go to Zotero→Settings→Sync and turn off sync full-text content, sync attachment files, sync attachment files in group libraries but leave all syncing to retain syncing of file/group organization
6. Go to Zotero→Settings→Advanced and change the Linked Attachment Directory to the local directory of the Zotero files

