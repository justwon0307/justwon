from bs4 import BeautifulSoup


def clean_html(html: str) -> str:
    """
    HTML에서 <script>...</script> 블록을 전부 제거.
    대소문자 구분 없이 처리하고, 여러 줄에 걸쳐 있어도 삭제.
    """
    soup = BeautifulSoup(html, "html.parser")

    for script in soup.find_all("script"):
        script.decompose()

    return str(soup).strip()
