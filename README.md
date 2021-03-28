# MOVIELIST

341x192 | 342x684

# Inhaltsverzeichnis

1. <a href="#setup" style="color: #4183c4;">Sachen die benötigt werden</a>
2. <a href="#names" style="color: #4183c4;">Namensgebung</a>
3. <a href="#layout" style="color: #4183c4;">JSON Layout</a>

<br><br><br>

# Sachen die benötigt werden

```console
$ sudo apt install nodejs
```

```console
$ sudo apt install npm
```

<br><br><br>

# Namensgebung für Ordner & Dateien<a name="name"></a>

## Regeln für Namensgebung

(Dieser Abschnitt ist insofern unwichtig da auf unserer Webseite eine Funktion für eben dies existiert.)

Für den key

- Alles wird kleingeschrieben
- Doppelte/ oder mehr Leerzeichen werden durch eines ersetzt
- Leerzeichen ( ) werden mit Bindestrichen (-) ersetzt
- Bindestriche (-) werden mit geschwungenen Bindestrichen ersetzt (~)
- Unnötige Parameter sollten nicht verwendet werden

Für das Argument gilt prinzipel das gleiche, aber vor einem Argument müssen zwei Bindestriche (--) gesetzt werden ("--" escaped "-")

Als Beispiel: "Avengers: Endgame" wird zu "`avengers:-endgame--de-de`", in diesem Beispiel wurden alle möglichen Argumente verwendet, obwohl nur zwei benötigt werden. Dies gilt zu vermeiden.

## Argumente

Die Argumente sind in richtige Reihenfolge gelistet, umstellen ist nicht erlaubt/möglich.
<br>

### Für Ordner:

| Argument | Typ      | Standartwert | Information |
| -------- | -------- | ------------ | ----------- |
| `key`    | `string` | **required** |             |

<br>

### Für Dateien:

| Argument           | Typ      | Standartwert | Information |
| ------------------ | -------- | ------------ | ----------- |
| `key`              | `string` | **required** |             |
| `language`         | `string` | **required** |             |
| `subitle-language` | `string` | `{language}` |             |

<br><br><br>

# JSON Layout

Diese Datei liegt in dem Ordner neben der z.b. mp4 Datei und heißt **info.json**

```json
{
  "key": "",
  "title": "",
  "actors": "",
  "description": "",
  "duration": 90,
  "fsk": 18,
  "highlight": false,
  "images": {
    "horizontal": "",
    "landscape": "",
    "vertical": ""
  },
  "keywords": [],
  "rating": 5,
  "release_time": 1631370480000,
  "resolution": "1080p",
  "type": "movie",
  "nudity": false,
  "topics": {
    "action": false,
    "adventure": false,
    "anime": false,
    "comedy": false,
    "crime": false,
    "documentation": false,
    "drama": false,
    "family": false,
    "fantasy": false,
    "hollywood": false,
    "horror": false,
    "musical": false,
    "romantic": false,
    "classic": false
  },
  "languages": {
    "de": [false, "de"],
    "en": [false, "en"],
    "jp": [false, "jp"]
  },
  "publisher": {
    "avatar_url": "",
    "date": 1631370480000,
    "name": ""
  }
}
```

Die ganzen Werte sollten selbsterkärend sein, falls es jemand (du) nicht versteht:

| Argument      | Typ        | Standartwert | Information                                                                                                                                                                                                                          |
| ------------- | ---------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `title`       | `string`   | **required** | Der Titel ist die schöne Form des Keys. Im Titel wird Rechtschreibung beachtet und er sollte je nach Möglichkeit dem Originaltitel entsprechen und auf Englisch sein.                                                                |
| `duration`    | `string`   | **required** | z.B. 1h 25min nicht 145min oder 1.2h etc.                                                                                                                                                                                            |
| `image_url`   | `string`   | **required** | Sollte standartmäßig auf dem Server/ in dem jeweiligen Ordner gespeichert werden. Für die Server URL einfach `%storage_server%` verwenden.                                                                                           |
| `rating`      | `string`   | **required** | Das Rating was der Contributor dem Film geben möchte (Wert zwischen 0 und 5, kein Komma, sondern Punkt)                                                                                                                              |
| `type`        | `string`   | **required** | Entweder `movie` oder `series`. Rechtschreibung ist sehr wichtig, sonst ist der Film/ die Serie invalide.                                                                                                                            |
| `key`         | `string`   | **required** | Der gleiche Key der für die Namensgebung verwendet wird. Der Key bei der Namensgebung und in der info.js **müssen** identisch sein.                                                                                                  |
| `keywords`    | `string[]` | **required** | Es handelt sich um einen Array aus Strings, diese kann leer sein, sollte es aber nicht.                                                                                                                                              |
| `topics`      | `object`   | **required** | Topics sind ebenfalls nicht unbedingt notwendig, werden aber erwünscht. Sie müssen nicht die Topics sein, welche der auf Wikipedia etc. stehen, man kann auch nach Gefühl gehen. Wenn ein Topic zutrifft, einfach auf `true` setzen. |
| `languages`   | `object`   | **required** | Alle bei uns verfügbaren Sprachen stehen in diesem Objekt, falls eine Datei mit der Sprache existiert wird sie kategorisiert.                                                                                                        |
| `contributor` | `object`   | **required** | Ebenfalls ein Objekt: `name` und `avatar_url` sollten klar sein. `date` ist praktisch ein String aber theoretisch ein Integer: Es muss die Nummer der Milisekunden zwischen dem 1. Januar 1970 00:00:00 UTC beinhalten. \*²          |

> Credits: <a href="https://github.com/m2vi" style="color: #4183c4;">m2vi</a>

\*²

```js
// Bei Javascript wäre dies so zu erreichen:
Date.prototype.getTime();
```
