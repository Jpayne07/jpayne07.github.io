from flask import Flask, request, make_response, jsonify, send_from_directory, Blueprint
import os
from flask_restful import Resource, Api
from collections import defaultdict
import io
import csv



ngram_app = Blueprint('ngram', __name__,url_prefix="/api/ngram")
api = Api(ngram_app)

class HandleFormData(Resource):
    def post(self):
        upload = request.files['file']
        decoded_file = upload.read().decode('utf-8')
        csvfile = io.StringIO(decoded_file)
        reader = csv.DictReader(csvfile)
        reader.fieldnames = [field.lstrip('\ufeff').strip().lower() for field in reader.fieldnames]
        # Read the first line
        absolute_freq = defaultdict(int)
        weighted_freq = defaultdict(float)
        def get_ngrams(words, n):
            return [' '.join(words[i:i+n]) for i in range(len(words) - n + 1)]
        
        n = int(request.form.get("ngram", 1))
        for row in reader:
            try:
                phrase = row.get('word', '').strip().lower()
                value = float(row.get('value', '0'))

                if not phrase:
                    continue

                tokens = phrase.split()
                ngrams = set(get_ngrams(tokens, n))  # use set to deduplicate n-grams in a row

                for ngram in ngrams:
                    absolute_freq[ngram] += 1
                    weighted_freq[ngram] += value

            except (ValueError, KeyError):
                continue

        # Create an in-memory CSV file for the response
        output = io.StringIO()
        fieldnames = ['word', 'absolute_frequency', 'weighted_frequency']
        writer = csv.DictWriter(output, fieldnames=fieldnames)
        writer.writeheader()

        for word in absolute_freq:
            writer.writerow({
                'word': word,
                'absolute_frequency': absolute_freq[word],
                'weighted_frequency': weighted_freq[word]
            })

        response = make_response(output.getvalue())
        response.headers["Content-Disposition"] = "attachment; filename=word_frequencies.csv"
        response.headers["Content-type"] = "text/csv"
        return response
class handleThis(Resource):
    def get(self):
        return "Hello"
    
api.add_resource(HandleFormData,'/upload/new')
api.add_resource(handleThis,'/')


