# -*- coding: utf-8 -*-
from flask import Flask, jsonify, request
import json
import requests
# from scrapy.selector import Selector
import unicodedata
import re
from flask_cors import CORS
import openapi1
app = Flask(__name__)
CORS(app, resources=r'/*')
app.config.update(
    DEBUG=True
)

@app.route('/v1/img/point', methods=["POST"])
def predict():
    if request.method != "POST":
        return

    if request.files.get("image"):
        # Method 1
        # with request.files["image"] as f:
        #     im = Image.open(io.BytesIO(f.read()))

        # Method 2
        im_file = request.files["image"]
        im_bytes = im_file.read()
        arrays = openapi1.bytes_img(im_bytes)
        result = openapi1.predict_(arrays)
        respobj = {"code":200,'msg':'success',
            'data':result
        }
        return jsonify(respobj)
    else:
        respobj1 = {"code": 503, 'msg': '图片解析失败或无图片',
                   'data': None
                   }

        return jsonify(respobj1)
        # im = Image.open(io.BytesIO(im_bytes))
        #
        # if model in models:
        #     results = models[model](im, size=640)  # reduce size=320 for faster inference
        #     return results.pandas().xyxy[0].to_json(orient="records")



if __name__ == '__main__':
    CORS(app, supports_credentials=True)
    # app.debug = True

    # app.config['JSON_AS_ASCII'] = False
    # app.config['JSONIFY_MIMETYPE'] = "application/json;charset=utf-8"
    app.run(host='0.0.0.0', port=5200)
