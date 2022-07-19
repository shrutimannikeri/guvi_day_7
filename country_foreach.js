let xhr=new XMLHttpRequest()
xhr.open('GET','https://restcountries.com/v2/all')

xhr.onload=function(){
    if(xhr.status>=200 && xhr.status<300){
        let data=JSON.parse(this.response)
        data.forEach((ele) => {
            console.log(`
            country: ${ele.name}
            capital: ${ele.capital}
            flag : ${ele.flag }
            `)
        });
    }
    else{
        console.log("ERROR....")
    }
}
xhr.send()





// output :


// country: Afghanistan
// capital: Kabul
// flag : https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg

// country_foreach.js:8 
// country: Åland Islands
// capital: Mariehamn
// flag : https://flagcdn.com/ax.svg

// country_foreach.js:8 
// country: Albania
// capital: Tirana
// flag : https://flagcdn.com/al.svg

// country_foreach.js:8 
// country: Algeria
// capital: Algiers
// flag : https://flagcdn.com/dz.svg

// country_foreach.js:8 
// country: American Samoa
// capital: Pago Pago
// flag : https://flagcdn.com/as.svg

// country_foreach.js:8 
// country: Andorra
// capital: Andorra la Vella
// flag : https://flagcdn.com/ad.svg

// country_foreach.js:8 
// country: Angola
// capital: Luanda
// flag : https://flagcdn.com/ao.svg

// country_foreach.js:8 
// country: Anguilla
// capital: The Valley
// flag : https://flagcdn.com/ai.svg

// country_foreach.js:8 
// country: Antarctica
// capital: undefined
// flag : https://flagcdn.com/aq.svg

// country_foreach.js:8 
// country: Antigua and Barbuda
// capital: Saint John's
// flag : https://flagcdn.com/ag.svg

// country_foreach.js:8 
// country: Argentina
// capital: Buenos Aires
// flag : https://flagcdn.com/ar.svg

// country_foreach.js:8 
// country: Armenia
// capital: Yerevan
// flag : https://flagcdn.com/am.svg

// country_foreach.js:8 
// country: Aruba
// capital: Oranjestad
// flag : https://flagcdn.com/aw.svg

// country_foreach.js:8 
// country: Australia
// capital: Canberra
// flag : https://flagcdn.com/au.svg

// country_foreach.js:8 
// country: Austria
// capital: Vienna
// flag : https://flagcdn.com/at.svg

// country_foreach.js:8 
// country: Azerbaijan
// capital: Baku
// flag : https://flagcdn.com/az.svg

// country_foreach.js:8 
// country: Bahamas
// capital: Nassau
// flag : https://flagcdn.com/bs.svg

// country_foreach.js:8 
// country: Bahrain
// capital: Manama
// flag : https://flagcdn.com/bh.svg

// country_foreach.js:8 
// country: Bangladesh
// capital: Dhaka
// flag : https://flagcdn.com/bd.svg

// country_foreach.js:8 
// country: Barbados
// capital: Bridgetown
// flag : https://flagcdn.com/bb.svg

// country_foreach.js:8 
// country: Belarus
// capital: Minsk
// flag : https://flagcdn.com/by.svg

// country_foreach.js:8 
// country: Belgium
// capital: Brussels
// flag : https://flagcdn.com/be.svg

// country_foreach.js:8 
// country: Belize
// capital: Belmopan
// flag : https://flagcdn.com/bz.svg

// country_foreach.js:8 
// country: Benin
// capital: Porto-Novo
// flag : https://flagcdn.com/bj.svg

// country_foreach.js:8 
// country: Bermuda
// capital: Hamilton
// flag : https://flagcdn.com/bm.svg

// country_foreach.js:8 
// country: Bhutan
// capital: Thimphu
// flag : https://flagcdn.com/bt.svg

// country_foreach.js:8 
// country: Bolivia (Plurinational State of)
// capital: Sucre
// flag : https://flagcdn.com/bo.svg

// country_foreach.js:8 
// country: Bonaire, Sint Eustatius and Saba
// capital: Kralendijk
// flag : https://flagcdn.com/bq.svg

// country_foreach.js:8 
// country: Bosnia and Herzegovina
// capital: Sarajevo
// flag : https://flagcdn.com/ba.svg

// country_foreach.js:8 
// country: Botswana
// capital: Gaborone
// flag : https://flagcdn.com/bw.svg

// country_foreach.js:8 
// country: Bouvet Island
// capital: undefined
// flag : https://flagcdn.com/bv.svg

// country_foreach.js:8 
// country: Brazil
// capital: Brasília
// flag : https://flagcdn.com/br.svg

// country_foreach.js:8 
// country: British Indian Ocean Territory
// capital: Diego Garcia
// flag : https://flagcdn.com/io.svg

// country_foreach.js:8 
// country: United States Minor Outlying Islands
// capital: undefined
// flag : https://flagcdn.com/um.svg

// country_foreach.js:8 
// country: Virgin Islands (British)
// capital: Road Town
// flag : https://flagcdn.com/vg.svg

// country_foreach.js:8 
// country: Virgin Islands (U.S.)
// capital: Charlotte Amalie
// flag : https://flagcdn.com/vi.svg

// country_foreach.js:8 
// country: Brunei Darussalam
// capital: Bandar Seri Begawan
// flag : https://flagcdn.com/bn.svg

// country_foreach.js:8 
// country: Bulgaria
// capital: Sofia
// flag : https://flagcdn.com/bg.svg

// country_foreach.js:8 
// country: Burkina Faso
// capital: Ouagadougou
// flag : https://flagcdn.com/bf.svg

// country_foreach.js:8 
// country: Burundi
// capital: Gitega
// flag : https://flagcdn.com/bi.svg

// country_foreach.js:8 
// country: Cambodia
// capital: Phnom Penh
// flag : https://flagcdn.com/kh.svg

// country_foreach.js:8 
// country: Cameroon
// capital: Yaoundé
// flag : https://flagcdn.com/cm.svg

// country_foreach.js:8 
// country: Canada
// capital: Ottawa
// flag : https://flagcdn.com/ca.svg

// country_foreach.js:8 
// country: Cabo Verde
// capital: Praia
// flag : https://flagcdn.com/cv.svg

// country_foreach.js:8 
// country: Cayman Islands
// capital: George Town
// flag : https://flagcdn.com/ky.svg

// country_foreach.js:8 
// country: Central African Republic
// capital: Bangui
// flag : https://flagcdn.com/cf.svg

// country_foreach.js:8 
// country: Chad
// capital: N'Djamena
// flag : https://flagcdn.com/td.svg

// country_foreach.js:8 
// country: Chile
// capital: Santiago
// flag : https://flagcdn.com/cl.svg

// country_foreach.js:8 
// country: China
// capital: Beijing
// flag : https://flagcdn.com/cn.svg

// country_foreach.js:8 
// country: Christmas Island
// capital: Flying Fish Cove
// flag : https://flagcdn.com/cx.svg

// country_foreach.js:8 
// country: Cocos (Keeling) Islands
// capital: West Island
// flag : https://flagcdn.com/cc.svg

// country_foreach.js:8 
// country: Colombia
// capital: Bogotá
// flag : https://flagcdn.com/co.svg

// country_foreach.js:8 
// country: Comoros
// capital: Moroni
// flag : https://flagcdn.com/km.svg

// country_foreach.js:8 
// country: Congo
// capital: Brazzaville
// flag : https://flagcdn.com/cg.svg

// country_foreach.js:8 
// country: Congo (Democratic Republic of the)
// capital: Kinshasa
// flag : https://flagcdn.com/cd.svg

// country_foreach.js:8 
// country: Cook Islands
// capital: Avarua
// flag : https://flagcdn.com/ck.svg

// country_foreach.js:8 
// country: Costa Rica
// capital: San José
// flag : https://flagcdn.com/cr.svg

// country_foreach.js:8 
// country: Croatia
// capital: Zagreb
// flag : https://flagcdn.com/hr.svg

// country_foreach.js:8 
// country: Cuba
// capital: Havana
// flag : https://flagcdn.com/cu.svg

// country_foreach.js:8 
// country: Curaçao
// capital: Willemstad
// flag : https://flagcdn.com/cw.svg

// country_foreach.js:8 
// country: Cyprus
// capital: Nicosia
// flag : https://flagcdn.com/cy.svg

// country_foreach.js:8 
// country: Czech Republic
// capital: Prague
// flag : https://flagcdn.com/cz.svg

// country_foreach.js:8 
// country: Denmark
// capital: Copenhagen
// flag : https://flagcdn.com/dk.svg

// country_foreach.js:8 
// country: Djibouti
// capital: Djibouti
// flag : https://flagcdn.com/dj.svg

// country_foreach.js:8 
// country: Dominica
// capital: Roseau
// flag : https://flagcdn.com/dm.svg

// country_foreach.js:8 
// country: Dominican Republic
// capital: Santo Domingo
// flag : https://flagcdn.com/do.svg

// country_foreach.js:8 
// country: Ecuador
// capital: Quito
// flag : https://flagcdn.com/ec.svg

// country_foreach.js:8 
// country: Egypt
// capital: Cairo
// flag : https://flagcdn.com/eg.svg

// country_foreach.js:8 
// country: El Salvador
// capital: San Salvador
// flag : https://flagcdn.com/sv.svg

// country_foreach.js:8 
// country: Equatorial Guinea
// capital: Malabo
// flag : https://flagcdn.com/gq.svg

// country_foreach.js:8 
// country: Eritrea
// capital: Asmara
// flag : https://flagcdn.com/er.svg

// country_foreach.js:8 
// country: Estonia
// capital: Tallinn
// flag : https://flagcdn.com/ee.svg

// country_foreach.js:8 
// country: Ethiopia
// capital: Addis Ababa
// flag : https://flagcdn.com/et.svg

// country_foreach.js:8 
// country: Falkland Islands (Malvinas)
// capital: Stanley
// flag : https://flagcdn.com/fk.svg

// country_foreach.js:8 
// country: Faroe Islands
// capital: Tórshavn
// flag : https://flagcdn.com/fo.svg

// country_foreach.js:8 
// country: Fiji
// capital: Suva
// flag : https://flagcdn.com/fj.svg

// country_foreach.js:8 
// country: Finland
// capital: Helsinki
// flag : https://flagcdn.com/fi.svg

// country_foreach.js:8 
// country: France
// capital: Paris
// flag : https://flagcdn.com/fr.svg

// country_foreach.js:8 
// country: French Guiana
// capital: Cayenne
// flag : https://flagcdn.com/gf.svg

// country_foreach.js:8 
// country: French Polynesia
// capital: Papeetē
// flag : https://flagcdn.com/pf.svg

// country_foreach.js:8 
// country: French Southern Territories
// capital: Port-aux-Français
// flag : https://flagcdn.com/tf.svg

// country_foreach.js:8 
// country: Gabon
// capital: Libreville
// flag : https://flagcdn.com/ga.svg

// country_foreach.js:8 
// country: Gambia
// capital: Banjul
// flag : https://flagcdn.com/gm.svg

// country_foreach.js:8 
// country: Georgia
// capital: Tbilisi
// flag : https://flagcdn.com/ge.svg

// country_foreach.js:8 
// country: Germany
// capital: Berlin
// flag : https://flagcdn.com/de.svg

// country_foreach.js:8 
// country: Ghana
// capital: Accra
// flag : https://flagcdn.com/gh.svg

// country_foreach.js:8 
// country: Gibraltar
// capital: Gibraltar
// flag : https://flagcdn.com/gi.svg

// country_foreach.js:8 
// country: Greece
// capital: Athens
// flag : https://flagcdn.com/gr.svg

// country_foreach.js:8 
// country: Greenland
// capital: Nuuk
// flag : https://flagcdn.com/gl.svg

// country_foreach.js:8 
// country: Grenada
// capital: St. George's
// flag : https://flagcdn.com/gd.svg

// country_foreach.js:8 
// country: Guadeloupe
// capital: Basse-Terre
// flag : https://flagcdn.com/gp.svg

// country_foreach.js:8 
// country: Guam
// capital: Hagåtña
// flag : https://flagcdn.com/gu.svg

// country_foreach.js:8 
// country: Guatemala
// capital: Guatemala City
// flag : https://flagcdn.com/gt.svg

// country_foreach.js:8 
// country: Guernsey
// capital: St. Peter Port
// flag : https://flagcdn.com/gg.svg

// country_foreach.js:8 
// country: Guinea
// capital: Conakry
// flag : https://flagcdn.com/gn.svg

// country_foreach.js:8 
// country: Guinea-Bissau
// capital: Bissau
// flag : https://flagcdn.com/gw.svg

// country_foreach.js:8 
// country: Guyana
// capital: Georgetown
// flag : https://flagcdn.com/gy.svg

// country_foreach.js:8 
// country: Haiti
// capital: Port-au-Prince
// flag : https://flagcdn.com/ht.svg

// country_foreach.js:8 
// country: Heard Island and McDonald Islands
// capital: undefined
// flag : https://flagcdn.com/hm.svg

// country_foreach.js:8 
// country: Vatican City
// capital: Vatican City
// flag : https://flagcdn.com/va.svg

// country_foreach.js:8 
// country: Honduras
// capital: Tegucigalpa
// flag : https://flagcdn.com/hn.svg

// country_foreach.js:8 
// country: Hungary
// capital: Budapest
// flag : https://flagcdn.com/hu.svg

// country_foreach.js:8 
// country: Hong Kong
// capital: City of Victoria
// flag : https://flagcdn.com/hk.svg

// country_foreach.js:8 
// country: Iceland
// capital: Reykjavík
// flag : https://flagcdn.com/is.svg

// country_foreach.js:8 
// country: India
// capital: New Delhi
// flag : https://flagcdn.com/in.svg

// country_foreach.js:8 
// country: Indonesia
// capital: Jakarta
// flag : https://flagcdn.com/id.svg

// country_foreach.js:8 
// country: Ivory Coast
// capital: Yamoussoukro
// flag : https://flagcdn.com/ci.svg

// country_foreach.js:8 
// country: Iran (Islamic Republic of)
// capital: Tehran
// flag : https://flagcdn.com/ir.svg

// country_foreach.js:8 
// country: Iraq
// capital: Baghdad
// flag : https://flagcdn.com/iq.svg

// country_foreach.js:8 
// country: Ireland
// capital: Dublin
// flag : https://flagcdn.com/ie.svg

// country_foreach.js:8 
// country: Isle of Man
// capital: Douglas
// flag : https://flagcdn.com/im.svg

// country_foreach.js:8 
// country: Israel
// capital: Jerusalem
// flag : https://flagcdn.com/il.svg

// country_foreach.js:8 
// country: Italy
// capital: Rome
// flag : https://flagcdn.com/it.svg

// country_foreach.js:8 
// country: Jamaica
// capital: Kingston
// flag : https://flagcdn.com/jm.svg

// country_foreach.js:8 
// country: Japan
// capital: Tokyo
// flag : https://flagcdn.com/jp.svg

// country_foreach.js:8 
// country: Jersey
// capital: Saint Helier
// flag : https://flagcdn.com/je.svg

// country_foreach.js:8 
// country: Jordan
// capital: Amman
// flag : https://flagcdn.com/jo.svg

// country_foreach.js:8 
// country: Kazakhstan
// capital: Nur-Sultan
// flag : https://flagcdn.com/kz.svg

// country_foreach.js:8 
// country: Kenya
// capital: Nairobi
// flag : https://flagcdn.com/ke.svg

// country_foreach.js:8 
// country: Kiribati
// capital: South Tarawa
// flag : https://flagcdn.com/ki.svg

// country_foreach.js:8 
// country: Kuwait
// capital: Kuwait City
// flag : https://flagcdn.com/kw.svg

// country_foreach.js:8 
// country: Kyrgyzstan
// capital: Bishkek
// flag : https://flagcdn.com/kg.svg

// country_foreach.js:8 
// country: Lao People's Democratic Republic
// capital: Vientiane
// flag : https://flagcdn.com/la.svg

// country_foreach.js:8 
// country: Latvia
// capital: Riga
// flag : https://flagcdn.com/lv.svg

// country_foreach.js:8 
// country: Lebanon
// capital: Beirut
// flag : https://flagcdn.com/lb.svg

// country_foreach.js:8 
// country: Lesotho
// capital: Maseru
// flag : https://flagcdn.com/ls.svg

// country_foreach.js:8 
// country: Liberia
// capital: Monrovia
// flag : https://flagcdn.com/lr.svg

// country_foreach.js:8 
// country: Libya
// capital: Tripoli
// flag : https://flagcdn.com/ly.svg

// country_foreach.js:8 
// country: Liechtenstein
// capital: Vaduz
// flag : https://flagcdn.com/li.svg

// country_foreach.js:8 
// country: Lithuania
// capital: Vilnius
// flag : https://flagcdn.com/lt.svg

// country_foreach.js:8 
// country: Luxembourg
// capital: Luxembourg
// flag : https://flagcdn.com/lu.svg

// country_foreach.js:8 
// country: Macao
// capital: undefined
// flag : https://flagcdn.com/mo.svg

// country_foreach.js:8 
// country: North Macedonia
// capital: Skopje
// flag : https://flagcdn.com/mk.svg

// country_foreach.js:8 
// country: Madagascar
// capital: Antananarivo
// flag : https://flagcdn.com/mg.svg

// country_foreach.js:8 
// country: Malawi
// capital: Lilongwe
// flag : https://flagcdn.com/mw.svg

// country_foreach.js:8 
// country: Malaysia
// capital: Kuala Lumpur
// flag : https://flagcdn.com/my.svg

// country_foreach.js:8 
// country: Maldives
// capital: Malé
// flag : https://flagcdn.com/mv.svg

// country_foreach.js:8 
// country: Mali
// capital: Bamako
// flag : https://flagcdn.com/ml.svg

// country_foreach.js:8 
// country: Malta
// capital: Valletta
// flag : https://flagcdn.com/mt.svg

// country_foreach.js:8 
// country: Marshall Islands
// capital: Majuro
// flag : https://flagcdn.com/mh.svg

// country_foreach.js:8 
// country: Martinique
// capital: Fort-de-France
// flag : https://flagcdn.com/mq.svg

// country_foreach.js:8 
// country: Mauritania
// capital: Nouakchott
// flag : https://flagcdn.com/mr.svg

// country_foreach.js:8 
// country: Mauritius
// capital: Port Louis
// flag : https://flagcdn.com/mu.svg

// country_foreach.js:8 
// country: Mayotte
// capital: Mamoudzou
// flag : https://flagcdn.com/yt.svg

// country_foreach.js:8 
// country: Mexico
// capital: Mexico City
// flag : https://flagcdn.com/mx.svg

// country_foreach.js:8 
// country: Micronesia (Federated States of)
// capital: Palikir
// flag : https://flagcdn.com/fm.svg

// country_foreach.js:8 
// country: Moldova (Republic of)
// capital: Chișinău
// flag : https://flagcdn.com/md.svg

// country_foreach.js:8 
// country: Monaco
// capital: Monaco
// flag : https://flagcdn.com/mc.svg

// country_foreach.js:8 
// country: Mongolia
// capital: Ulan Bator
// flag : https://flagcdn.com/mn.svg

// country_foreach.js:8 
// country: Montenegro
// capital: Podgorica
// flag : https://flagcdn.com/me.svg

// country_foreach.js:8 
// country: Montserrat
// capital: Plymouth
// flag : https://flagcdn.com/ms.svg

// country_foreach.js:8 
// country: Morocco
// capital: Rabat
// flag : https://flagcdn.com/ma.svg

// country_foreach.js:8 
// country: Mozambique
// capital: Maputo
// flag : https://flagcdn.com/mz.svg

// country_foreach.js:8 
// country: Myanmar
// capital: Naypyidaw
// flag : https://flagcdn.com/mm.svg

// country_foreach.js:8 
// country: Namibia
// capital: Windhoek
// flag : https://flagcdn.com/na.svg

// country_foreach.js:8 
// country: Nauru
// capital: Yaren
// flag : https://flagcdn.com/nr.svg

// country_foreach.js:8 
// country: Nepal
// capital: Kathmandu
// flag : https://flagcdn.com/np.svg

// country_foreach.js:8 
// country: Netherlands
// capital: Amsterdam
// flag : https://flagcdn.com/nl.svg

// country_foreach.js:8 
// country: New Caledonia
// capital: Nouméa
// flag : https://flagcdn.com/nc.svg

// country_foreach.js:8 
// country: New Zealand
// capital: Wellington
// flag : https://flagcdn.com/nz.svg

// country_foreach.js:8 
// country: Nicaragua
// capital: Managua
// flag : https://flagcdn.com/ni.svg

// country_foreach.js:8 
// country: Niger
// capital: Niamey
// flag : https://flagcdn.com/ne.svg

// country_foreach.js:8 
// country: Nigeria
// capital: Abuja
// flag : https://flagcdn.com/ng.svg

// country_foreach.js:8 
// country: Niue
// capital: Alofi
// flag : https://flagcdn.com/nu.svg

// country_foreach.js:8 
// country: Norfolk Island
// capital: Kingston
// flag : https://flagcdn.com/nf.svg

// country_foreach.js:8 
// country: Korea (Democratic People's Republic of)
// capital: Pyongyang
// flag : https://flagcdn.com/kp.svg

// country_foreach.js:8 
// country: Northern Mariana Islands
// capital: Saipan
// flag : https://flagcdn.com/mp.svg

// country_foreach.js:8 
// country: Norway
// capital: Oslo
// flag : https://flagcdn.com/no.svg

// country_foreach.js:8 
// country: Oman
// capital: Muscat
// flag : https://flagcdn.com/om.svg

// country_foreach.js:8 
// country: Pakistan
// capital: Islamabad
// flag : https://flagcdn.com/pk.svg

// country_foreach.js:8 
// country: Palau
// capital: Ngerulmud
// flag : https://flagcdn.com/pw.svg

// country_foreach.js:8 
// country: Palestine, State of
// capital: Ramallah
// flag : https://flagcdn.com/ps.svg

// country_foreach.js:8 
// country: Panama
// capital: Panama City
// flag : https://flagcdn.com/pa.svg

// country_foreach.js:8 
// country: Papua New Guinea
// capital: Port Moresby
// flag : https://flagcdn.com/pg.svg

// country_foreach.js:8 
// country: Paraguay
// capital: Asunción
// flag : https://flagcdn.com/py.svg

// country_foreach.js:8 
// country: Peru
// capital: Lima
// flag : https://flagcdn.com/pe.svg

// country_foreach.js:8 
// country: Philippines
// capital: Manila
// flag : https://flagcdn.com/ph.svg

// country_foreach.js:8 
// country: Pitcairn
// capital: Adamstown
// flag : https://flagcdn.com/pn.svg

// country_foreach.js:8 
// country: Poland
// capital: Warsaw
// flag : https://flagcdn.com/pl.svg

// country_foreach.js:8 
// country: Portugal
// capital: Lisbon
// flag : https://flagcdn.com/pt.svg

// country_foreach.js:8 
// country: Puerto Rico
// capital: San Juan
// flag : https://flagcdn.com/pr.svg

// country_foreach.js:8 
// country: Qatar
// capital: Doha
// flag : https://flagcdn.com/qa.svg

// country_foreach.js:8 
// country: Republic of Kosovo
// capital: Pristina
// flag : https://flagcdn.com/xk.svg

// country_foreach.js:8 
// country: Réunion
// capital: Saint-Denis
// flag : https://flagcdn.com/re.svg

// country_foreach.js:8 
// country: Romania
// capital: Bucharest
// flag : https://flagcdn.com/ro.svg

// country_foreach.js:8 
// country: Russian Federation
// capital: Moscow
// flag : https://flagcdn.com/ru.svg

// country_foreach.js:8 
// country: Rwanda
// capital: Kigali
// flag : https://flagcdn.com/rw.svg

// country_foreach.js:8 
// country: Saint Barthélemy
// capital: Gustavia
// flag : https://flagcdn.com/bl.svg

// country_foreach.js:8 
// country: Saint Helena, Ascension and Tristan da Cunha
// capital: Jamestown
// flag : https://flagcdn.com/sh.svg

// country_foreach.js:8 
// country: Saint Kitts and Nevis
// capital: Basseterre
// flag : https://flagcdn.com/kn.svg

// country_foreach.js:8 
// country: Saint Lucia
// capital: Castries
// flag : https://flagcdn.com/lc.svg

// country_foreach.js:8 
// country: Saint Martin (French part)
// capital: Marigot
// flag : https://flagcdn.com/mf.svg

// country_foreach.js:8 
// country: Saint Pierre and Miquelon
// capital: Saint-Pierre
// flag : https://flagcdn.com/pm.svg

// country_foreach.js:8 
// country: Saint Vincent and the Grenadines
// capital: Kingstown
// flag : https://flagcdn.com/vc.svg

// country_foreach.js:8 
// country: Samoa
// capital: Apia
// flag : https://flagcdn.com/ws.svg

// country_foreach.js:8 
// country: San Marino
// capital: City of San Marino
// flag : https://flagcdn.com/sm.svg

// country_foreach.js:8 
// country: Sao Tome and Principe
// capital: São Tomé
// flag : https://flagcdn.com/st.svg

// country_foreach.js:8 
// country: Saudi Arabia
// capital: Riyadh
// flag : https://flagcdn.com/sa.svg

// country_foreach.js:8 
// country: Senegal
// capital: Dakar
// flag : https://flagcdn.com/sn.svg

// country_foreach.js:8 
// country: Serbia
// capital: Belgrade
// flag : https://flagcdn.com/rs.svg

// country_foreach.js:8 
// country: Seychelles
// capital: Victoria
// flag : https://flagcdn.com/sc.svg

// country_foreach.js:8 
// country: Sierra Leone
// capital: Freetown
// flag : https://flagcdn.com/sl.svg

// country_foreach.js:8 
// country: Singapore
// capital: Singapore
// flag : https://flagcdn.com/sg.svg

// country_foreach.js:8 
// country: Sint Maarten (Dutch part)
// capital: Philipsburg
// flag : https://flagcdn.com/sx.svg

// country_foreach.js:8 
// country: Slovakia
// capital: Bratislava
// flag : https://flagcdn.com/sk.svg

// country_foreach.js:8 
// country: Slovenia
// capital: Ljubljana
// flag : https://flagcdn.com/si.svg

// country_foreach.js:8 
// country: Solomon Islands
// capital: Honiara
// flag : https://flagcdn.com/sb.svg

// country_foreach.js:8 
// country: Somalia
// capital: Mogadishu
// flag : https://flagcdn.com/so.svg

// country_foreach.js:8 
// country: South Africa
// capital: Pretoria
// flag : https://flagcdn.com/za.svg

// country_foreach.js:8 
// country: South Georgia and the South Sandwich Islands
// capital: King Edward Point
// flag : https://flagcdn.com/gs.svg

// country_foreach.js:8 
// country: Korea (Republic of)
// capital: Seoul
// flag : https://flagcdn.com/kr.svg

// country_foreach.js:8 
// country: Spain
// capital: Madrid
// flag : https://flagcdn.com/es.svg

// country_foreach.js:8 
// country: Sri Lanka
// capital: Sri Jayawardenepura Kotte
// flag : https://flagcdn.com/lk.svg

// country_foreach.js:8 
// country: Sudan
// capital: Khartoum
// flag : https://flagcdn.com/sd.svg

// country_foreach.js:8 
// country: South Sudan
// capital: Juba
// flag : https://flagcdn.com/ss.svg

// country_foreach.js:8 
// country: Suriname
// capital: Paramaribo
// flag : https://flagcdn.com/sr.svg

// country_foreach.js:8 
// country: Svalbard and Jan Mayen
// capital: Longyearbyen
// flag : https://flagcdn.com/sj.svg

// country_foreach.js:8 
// country: Swaziland
// capital: Mbabane
// flag : https://flagcdn.com/sz.svg

// country_foreach.js:8 
// country: Sweden
// capital: Stockholm
// flag : https://flagcdn.com/se.svg

// country_foreach.js:8 
// country: Switzerland
// capital: Bern
// flag : https://flagcdn.com/ch.svg

// country_foreach.js:8 
// country: Syrian Arab Republic
// capital: Damascus
// flag : https://flagcdn.com/sy.svg

// country_foreach.js:8 
// country: Taiwan
// capital: Taipei
// flag : https://flagcdn.com/tw.svg

// country_foreach.js:8 
// country: Tajikistan
// capital: Dushanbe
// flag : https://flagcdn.com/tj.svg

// country_foreach.js:8 
// country: Tanzania, United Republic of
// capital: Dodoma
// flag : https://flagcdn.com/tz.svg

// country_foreach.js:8 
// country: Thailand
// capital: Bangkok
// flag : https://flagcdn.com/th.svg

// country_foreach.js:8 
// country: Timor-Leste
// capital: Dili
// flag : https://flagcdn.com/tl.svg

// country_foreach.js:8 
// country: Togo
// capital: Lomé
// flag : https://flagcdn.com/tg.svg

// country_foreach.js:8 
// country: Tokelau
// capital: Fakaofo
// flag : https://flagcdn.com/tk.svg

// country_foreach.js:8 
// country: Tonga
// capital: Nuku'alofa
// flag : https://flagcdn.com/to.svg

// country_foreach.js:8 
// country: Trinidad and Tobago
// capital: Port of Spain
// flag : https://flagcdn.com/tt.svg

// country_foreach.js:8 
// country: Tunisia
// capital: Tunis
// flag : https://flagcdn.com/tn.svg

// country_foreach.js:8 
// country: Turkey
// capital: Ankara
// flag : https://flagcdn.com/tr.svg

// country_foreach.js:8 
// country: Turkmenistan
// capital: Ashgabat
// flag : https://flagcdn.com/tm.svg

// country_foreach.js:8 
// country: Turks and Caicos Islands
// capital: Cockburn Town
// flag : https://flagcdn.com/tc.svg

// country_foreach.js:8 
// country: Tuvalu
// capital: Funafuti
// flag : https://flagcdn.com/tv.svg

// country_foreach.js:8 
// country: Uganda
// capital: Kampala
// flag : https://flagcdn.com/ug.svg

// country_foreach.js:8 
// country: Ukraine
// capital: Kyiv
// flag : https://flagcdn.com/ua.svg

// country_foreach.js:8 
// country: United Arab Emirates
// capital: Abu Dhabi
// flag : https://flagcdn.com/ae.svg

// country_foreach.js:8 
// country: United Kingdom of Great Britain and Northern Ireland
// capital: London
// flag : https://flagcdn.com/gb.svg

// country_foreach.js:8 
// country: United States of America
// capital: Washington, D.C.
// flag : https://flagcdn.com/us.svg

// country_foreach.js:8 
// country: Uruguay
// capital: Montevideo
// flag : https://flagcdn.com/uy.svg

// country_foreach.js:8 
// country: Uzbekistan
// capital: Tashkent
// flag : https://flagcdn.com/uz.svg

// country_foreach.js:8 
// country: Vanuatu
// capital: Port Vila
// flag : https://flagcdn.com/vu.svg

// country_foreach.js:8 
// country: Venezuela (Bolivarian Republic of)
// capital: Caracas
// flag : https://flagcdn.com/ve.svg

// country_foreach.js:8 
// country: Vietnam
// capital: Hanoi
// flag : https://flagcdn.com/vn.svg

// country_foreach.js:8 
// country: Wallis and Futuna
// capital: Mata-Utu
// flag : https://flagcdn.com/wf.svg

// country_foreach.js:8 
// country: Western Sahara
// capital: El Aaiún
// flag : https://flagcdn.com/eh.svg

// country_foreach.js:8 
// country: Yemen
// capital: Sana'a
// flag : https://flagcdn.com/ye.svg

// country_foreach.js:8 
// country: Zambia
// capital: Lusaka
// flag : https://flagcdn.com/zm.svg

// country_foreach.js:8 
// country: Zimbabwe
// capital: Harare
// flag : https://flagcdn.com/zw.svg