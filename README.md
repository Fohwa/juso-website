# juso-website
Die aktuelle Wordpress Website ist komplett überholt und muss neu aufgesetzt werden. Anstatt was mit Wordpress zu machen soll dieses Projekt eine Next.js Seite erstellen

## Dev stage

Für die zu überbrückende Zeit habe ich bereits eine Wordpress Seite erstellt, die gerade live ist auf [jusohsg-ms.de](https://jusohsg-ms.de)
Diese Seite soll live sein auf [jusohsg-ms.de/next](https://jusohsg-ms.de/next)

### Dev deploy
Diese Githup repo wird aktualisiert mit einer neuen version von der Seite.
Auf dem Raspi wird die Repo gepulled und mit build eine statische version erstellt.
Diese kopiert ein shell script in den entsprechenden Ordner

(wip, funktioniert noch nicht)

## Funktionalität
Aktuell noch keine und das nächste Ziel ist es die basic funktionalität der WP Seite zu kopieren. Auch das Design soll überarbeitet werden.


# Build on Raspi

cd ~/Documents/juso-next/juso-website
git pull

npm run build

sudo rm -r /var/www/html/next/*
sudo mv ~/Documents/juso-next/juso-website/out/* /var/www/html/next

