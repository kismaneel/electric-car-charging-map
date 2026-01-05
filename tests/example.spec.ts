import { expect, test } from "@playwright/test";

test.describe("라우팅 테스트", () => {
  test("충전소 검색 페이지 이동", async ({ page }) => {
    // 홈 페이지로 이동
    await page.goto("http://localhost:3000/"); //
    // 텍스트가 충전소 검색 버튼 찾아서 클릭
    //await page.getByRole('link', { name: "충전소 검색" }).click();
    // 가려져 있든, 아직 로딩 중이든 상관없이 강제로 눌러버리는 옵션입니다.
    await page.getByRole('link', { name: "충전소 검색" }).click({ force: true });
    // 새로운 URL이 '/station'인지 확인
    await expect(page).toHaveURL("http://localhost:3000/station");
  });

  test("즐겨찾기 페이지 이동", async ({ page }) => {
    // 홈 페이지로 이동
    await page.goto("http://localhost:3000/");
    // 텍스트가 즐겨찾기인 버튼 찾아서 클릭
    //await page.getByRole('link', { name: "즐겨찾기" }).click();
    // 가려져 있든, 아직 로딩 중이든 상관없이 강제로 눌러버리는 옵션입니다.
    await page.getByRole('link', { name: "즐겨찾기" }).click({ force: true });
    // 새로운 URL이 '/favorite'인지 확인
    await expect(page).toHaveURL("http://localhost:3000/favorite");
  });
});