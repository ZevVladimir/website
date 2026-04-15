---
Linux Integration: Done
Phone Integration: Done
Windows Integration: Done
---
**Access:** [https://login.tailscale.com/admin/machines](https://login.tailscale.com/admin/machines)

**Setup:** [https://tailscale.com/kb/1483/truenas](https://tailscale.com/kb/1483/truenas)

How to ssh once logged in

1. (not sure) set truenas-scale-1 as exit node

```Bash
tailscale status
```

1. Get the ip for truenas-scale-1 and then ssh to that with username@ip