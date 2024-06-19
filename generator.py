import os
import shutil  
from datetime import datetime

OUTPUT_DIR = "docs"
BASE_FILE = "base.html"

def html_tag(tag):
    return "<!-- {" + tag.upper() + "} -->"

def html(file_path):
    if not file_path.endswith(".html"):
        file_path += ".html"
    if not os.path.exists(file_path):
        raise RuntimeError("Html file {} does not exist!".format(file_path))
    return open(file_path, "r").read()

def page(page_file, has_header=True, has_google_play=False):
    out = html("base.html")

    if (has_header):
        out = out.replace(html_tag("header"), html("components/header.html"))

    if (has_google_play):
        out = out.replace(html_tag("google play"), html("components/google_play.html"))

    # insert current year
    out = out.replace(html_tag("cur year"), str(datetime.now().year))
        
    # insert the content
    out = out.replace(html_tag("content"), html("pages/{}".format(page_file)))

    out_path = os.path.join(OUTPUT_DIR, page_file)
    out_base_path = os.path.dirname(out_path)
    if not os.path.exists(out_base_path):
        os.makedirs(out_base_path)
    
    f = open(out_path, "w")
    f.write(out)
    print("Wrote page to " + out_path)

def generate():
    if not os.path.exists(OUTPUT_DIR):
        os.mkdir(OUTPUT_DIR)

    # clean old results
    shutil.rmtree(OUTPUT_DIR)
        
    # copy over assets
    shutil.copytree("static", OUTPUT_DIR)
    
    page("index.html")
    page("contact.html")
    page("privacy.html", has_header=False)
    
    page("games/index.html")
    page("games/blasteroids/index.html", has_google_play=True)
    page("games/vortex/index.html", has_google_play=True)
    
generate()
