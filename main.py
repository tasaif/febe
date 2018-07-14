#!/usr/bin/env python

import web
import os
from quik import FileLoader
loader = FileLoader('html')

class Template:
    def GET(self, path):
        user_data = web.input()
        template = loader.load_template("../template/" + path)
        return template.render(user_data, loader=loader).encode('utf-8')

urls = (
    '/template/(.*)', 'Template',
)
app = web.application(urls, globals())

if __name__ == "__main__":
    app.run()
