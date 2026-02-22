export type ToastOptions = {
  /**
   * Toast가 화면에 표시되는 시간 (밀리초 단위).
   * 기본값은 3초 (3000ms)
   * 0으로 설정하면, 직접 닫을 때까지 표시.
   */
  duration: number; // Toast가 화면에 표시되는 시간 (밀리초 단위)
  position:
    | "top"
    | "bottom"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"; // Toast의 위치
  /**
   * Toast의 유형.
   * 유형에 따라 배경 색상과 아이콘이 달라진다.
   */
  type: "default" | "success" | "warning" | "info";
  description?: string; // Toast의 추가 설명 텍스트 (선택 사항)
};

export const TOAST_EVENT_NAME = "SHOW_TOAST";
export const ANIMATION_DURATION_MS = 300;
export const ANIMATION_DURATION = `${ANIMATION_DURATION_MS}ms`;
