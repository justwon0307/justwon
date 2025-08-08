import re


def clean_html(html: str) -> str:
    """
    HTML에서 <script>...</script> 블록을 전부 제거.
    대소문자 구분 없이 처리하고, 여러 줄에 걸쳐 있어도 삭제.
    """
    if not html:
        return html
    # <script> 태그 전체 제거
    clean_html = re.sub(
        r"<\s*script[^>]*>.*?<\s*/\s*script\s*>",
        "",
        html,
        flags=re.IGNORECASE | re.DOTALL,
    )
    return clean_html.strip()
