# Миний аялал 🌷

Монгол хэлтэй өдрийн тэмдэглэл, төлөвлөгч, хуримтлал, дадал, нойр, мөчлөгийн frontend туршилтын хувилбар.

## 1. GitHub-д оруулах

1. ZIP файлыг компьютер дээрээ **Extract all** хийж задлана.
2. GitHub дээр тусдаа `minii-ayalal` repository үүсгэнэ.
3. **Add file → Upload files** сонгож задалсан төслийн доторх файлуудыг оруулна. ZIP-ийг өөрийг нь оруулахгүй.
4. `index.html`, `package.json`, `server.mjs` нь repository-ийн хамгийн дээд түвшинд байх ёстой. Давхар хавтас дотор бүү байрлуул.
5. **Commit changes** дарна.

`.devcontainer` нь Codespaces-ийн портын нэмэлт тохиргоо. Нуугдсан хавтсыг upload хийж чадаагүй ч npm start ажиллана.

## 2. Codespaces дээр ажиллуулах

Repository → **Code → Codespaces → Create codespace on main**.

Төслийн үндсэн хавтасны Terminal дээр:

```bash
npm start
```

Нэмэлт npm package суулгах шаардлагагүй. Node.js 18+ байхад болно.

**Ports → 8080 → Open in Browser** дарна. Тестлэхдээ портын visibility-г Public болгох шаардлагагүй.

Зогсоох: Terminal дээр **Ctrl+C**. Дараа нь Codespace-аа Stop хийнэ. Codespaces нь ашиглалтын хязгаартай хөгжүүлэлтийн орчин; байнгын hosting биш.

## 3. GitHub Pages дээр нээх

Сайтаа нийтлэхэд бэлэн болсон үед:

1. Repository → **Settings → Pages**.
2. **Source: Deploy from a branch**.
3. **Branch: main**, **Folder: /(root)**.
4. **Save**.
5. Байршуулалт дуусмагц Pages хэсэгт гарсан **Visit site** линкээр нээнэ.

`index.html` шууд нийтлэгдэнэ. Build, npm install, тусдаа сервер шаардлагагүй. `.nojekyll` файл багтсан.

Албан заавар: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Өгөгдөл ба одоогийн боломж

- Бүртгэлүүд тухайн browser-ийн IndexedDB-д хадгалагдана.
- Тохиргоо → **Бүх өгөгдлөө татах** нь JSON нөөц үүсгэнэ. Нөөц сэргээх/import одоогоор хийгдээгүй.
- Local файл, Codespaces preview, GitHub Pages нь тусдаа хаяг учраас нэг хаягийн бүртгэл нөгөө рүү автоматаар шилжихгүй.
- Шинэ хувилбар хуучин localStorage өгөгдлийг зөвхөн ижил origin дээр олбол IndexedDB рүү хуулна.
- Бодит хэрэглэгчийн бүртгэл, cloud sync, төлбөр, серверээр баталгааждаг Premium эрх хараахан холбогдоогүй. Premium нь demo унтраалгатай.
- Хувийн тэмдэглэл, нөөц JSON файлаа GitHub repository-д оруулахгүй.
- Үндсэн React код HTML-д багтсан. Google Fonts ачаалагдахгүй үед системийн фонт ашиглана.

## Файлууд

- `index.html`: сайт болон React интерфейсийн код.
- `server.mjs`: Codespaces болон компьютерийн preview сервер; өгөгдлийн backend биш.
- `package.json`: `npm start`, `npm run dev`, `npm run check`.
- `.devcontainer/devcontainer.json`: Node орчин болон 8080 портын тохиргоо.
- `.nojekyll`: GitHub Pages-ийн static файлын тохиргоо.

Өөрчлөлт хийхдээ `index.html`-ийг засаж, preview хуудсыг refresh хийнэ. `npm start` нь автоматаар browser refresh хийхгүй.

## Шалгалтын хүрээ

HTML доторх JavaScript-ийн syntax, үндсэн компонентуудын бүтэц, челленжийн огноо ба ахицын тооцооллыг шалгасан. Node preview серверийн HTTP хариу, файлын бүрэн байдлыг шалгасан. Browser UI, гар утасны харагдац, GitHub Pages deployment-ийг бодитоор турших шаардлагатай хэвээр.
