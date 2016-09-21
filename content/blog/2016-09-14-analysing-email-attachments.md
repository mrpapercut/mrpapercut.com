---
Title: Analysing email malware attachments
Date: 2016-09-16
Template: blog-post
Description: How to safely analyse email-attachment and search for malware downloaders
Tags: malware, tools
Filter: malware, tools
---

# Analysing email malware attachments
Spam emails containing malware downloaders are very common. Usually these emails contain a "credible" sender, a short message encouraging to open the attachment, and an attachment (most often a .zip or .docm file).

![Spam email](%base_url%/assets/spam-email-example1.png)
*Example of spam email with attachment*

The intended behaviour is that a user opens the email, opens the attachment and opens the file within. On Windows machines with mostly default settings, the file downloads a piece of malware (viruses, ransomware, ddos-clients).

## What can we do?
First of all, I cannot stress enough, do not use Windows. All email-malware I have encountered was aimed at Windows, by using WScript or MS Office. I use either a RaspberryPi with [Raspbian](https://www.raspberrypi.org/downloads/raspbian/) or [Kali Linux](https://www.kali.org).

Next I use two tools to extract attachments and/or code from emails
- [ripMIME](http://www.pldaniels.com/ripmime/) extracts attachments and text from emails
- [oletools](https://github.com/decalage2/oletools) contains `olevba` that can be used to extract macros from MS Office files

### ripMIME
Usage: `ripmime -i ./email/email.eml -d ./attachments/ && rm ./attachments/textfile*`

### olevba
Usage: `olevba ./attachments/document.docm -c --decode > /attachments/document.docm.macros`