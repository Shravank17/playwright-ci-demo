const { test, expect } = require("@playwright/test");
const ExcelJs = require("exceljs");

async function updateExcel(searchText, replaceText, filePath) {

  const workbook = new ExcelJs.Workbook();
  await workbook.xlsx.readFile(filePath);

  const worksheet = workbook.getWorksheet('Sheet1');

  for (let i = 2; i <= worksheet.rowCount; i++) {
    const cell = worksheet.getRow(i).getCell(2);
    if (cell.value === searchText) {
      cell.value = replaceText;
      break;
    }
  }

  await workbook.xlsx.writeFile(filePath);
}

test('upload download test', async ({ page }) => {

  await page.goto("https://rahulshettyacademy.com/upload-download-test/");

  const downloadPromise = page.waitForEvent('download');
  await page.getByRole("button", { name: "Download" }).click();
  const download = await downloadPromise;

  const filePath = "download.xlsx";
  await download.saveAs(filePath);

  await updateExcel("Mango", "Curd", filePath);

  await page.setInputFiles('#fileinput', filePath);

  await expect(page.getByText("Updated Excel Data Successfully.")).toBeVisible();
  await expect(page.getByRole('row').filter({ hasText: "Curd" })).toBeVisible();
});
