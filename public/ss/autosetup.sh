#!/bin/bash
echo
echo "-----"
echo "Welcome to first-time setup, by Aura!"
echo "This follows a modified version of DigitalOcean's server setup guide."
echo "(Guide link: https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-22-04)"
echo "Note: Minimal user intervention may be required. Don't walk away!"
echo "Enough talk, let's start! (in 5 seconds...)"

sleep 3

echo
echo "-----"
echo "Updating server registries..."
echo

apt update

echo
echo "Upgrading server packages..."
echo

apt upgrade -y

echo
echo "-----"
echo "Getting new packages..."
echo

apt install speedtest-cli -y
apt install ufw -y

echo
echo "Installing the latest LTS build of NodeJS via NVM (Node Version Manager)..."
echo

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
source ~/.bashrc
nvm install --lts

echo
echo "-----"
echo "Removing existing firewall rules in iptables and firewalld. You may see error messages..."

iptables -P INPUT ACCEPT
iptables -P FORWARD ACCEPT
iptables -P OUTPUT ACCEPT
iptables --flush

rm -rf /etc/firewalld/zones
systemctl restart firewalld

echo
echo "Setting up firewall for web traffic, Plex and Wireguard..."
echo

ufw disable
ufw allow OpenSSH
ufw allow 80/tcp
ufw allow 443/tcp
ufw allow 8080/tcp
ufw allow 32400/tcp
ufw allow 51820/udp
ufw enable

echo
echo "Check firewall status below."
echo

ufw status

echo 
echo "------"
echo "Server setup has finished. Rebooting..."

sleep 1
reboot
