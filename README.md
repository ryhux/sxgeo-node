# sxgeo-node

Интерфейс для работы с базой данных [Sypex Geo](http://sypexgeo.net/ru/about/).

## Описание

`sxgeo-node` предоставляет возможность поиска местоположения по IP-адресу с использованием базы данных Sypex Geo. Эта база данных специализируется на местоположениях IP-адресов, преимущественно для стран СНГ, и хранится в очень компактном формате.

## Установка

Для установки используйте npm:

```bash
npm install sxgeo-node
```

## Пример использования

```javascript
import SxGeo from "sxgeo-node";

const sxgeo = new SxGeo('GeoCity.dat');

const result = sxgeo.getCityFull('1.1.1.1');

console.log(result);
```

### Вывод

```json
{
  "city": {
    "id": 2174003,
    "lat": -27.46794,
    "lon": 153.02809,
    "name_ru": "Брисбен",
    "name_en": "Brisbane"
  },
  "region": {
    "id": 2152274,
    "name_ru": "Квинсленд",
    "name_en": "State of Queensland",
    "iso": "AU-QLD"
  },
  "country": {
    "id": 16,
    "iso": "AU",
    "lat": 630.36,
    "lon": 135,
    "name_ru": "Австралия",
    "name_en": "Australia"
  }
}
```

## Возвращаемые данные

Результатом поиска IP-адреса в базе являются:

- Координаты местонахождения – широта и долгота в WGS84
- Название города
- Название региона
- Название страны
- ISO-коды страны и региона
- [geoname_id](http://www.geonames.org/manual.html)