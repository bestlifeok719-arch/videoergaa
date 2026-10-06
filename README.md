# Video Ergaa: faayilota hunda (GitHub irratti ol fe'uuf)

## Faayilota (hundi isaanii repository tokko keessa, folder malee)
- index.html, sw.js, manifest.webmanifest, icon-192.png, icon-512.png, privacy.html  → appii (PWA)
- package.json, capacitor.config.json  → APK ijaaruuf
- android.yml  → APK ijaaruuf (GitHub Actions)

## 1. Appii (PWA) haaromsuu
1. GitHub, repository `videoergaa` seeni.
2. Add file → Upload files. Faayilota 6 jalqabaa ol fe'i (index.html, sw.js, manifest.webmanifest, icon-192.png, icon-512.png, privacy.html). "Replace" yoo jedhe eeyyi.
3. Commit changes. Daqiiqaa 1 hanga 2 booda appii cufii deebi'ii bani.

## 2. Waan ofii kee jijjiiruu qabdu
- index.html keessatti `const CFG={mail:""` jedhu barbaadi, `mail:"teessoo-keee@gmail.com"` taasisi (yaada fudhachuuf).
- privacy.html keessatti `[email kee asitti barreessi]` fi `[ኢሜይልዎን እዚህ ይጻፉ]` jedhu teessoo kee itti jijjiiri.
- GitHub irratti faayila tokko jijjiiruuf: faayila tuqi → qalama (✎ Edit) → jijjiiri → Commit.

## 3. APK ijaaruu
1. Faayilota package.json, capacitor.config.json fi android.yml ol fe'i.
2. android.yml tuqi → ✎ Edit. Maqaa faayilaa (gubbaa) `.github/workflows/android.yml` jedhee jijjiiri → Commit.
3. Actions (gubbaa) → "Build APK" → Run workflow. Daqiiqaa 5 hanga 10 eegi.
4. Xumurame booda, Actions → hojii xumurame tuqi → "Artifacts" keessaa `video-ergaa-apk` buusi (zip). Zip banii `app-debug.apk` bilbila irratti ijaari.

## 4. Beeksisa (AdMob)
- APK keessatti beeksisni ofumaa ni jalqaba (beeksisa qorannoo Google). Video sekondii 15 ol hojjechuuf namni beeksisa gabaabaa ilaala.
- Beeksisa dhugaa itti hidhuuf: AdMob irratti appii galmeessi, itti aansee android.yml keessatti `ADMOB_APP_ID` fi `REWARDED_ID` jedhu lakkoofsa AdMob kee jedhuun jijjiiri.
- PWA (marsariitii) irratti beeksisni hin jiru, hundumtuu bilisaan.
