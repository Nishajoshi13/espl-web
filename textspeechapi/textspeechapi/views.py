import json
from django.core.files import File
from django.http import HttpResponse, HttpResponseNotFound
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def api(request):
    file_location = 'textspeechapi/test.txt'
    if request.method == 'POST':
        try:
            f = open(file_location, 'w')
            received_json_data = json.loads(request.body)
            f.write(received_json_data["text"])
            with open(file_location, 'r') as f:
                file_data = f.read()

            # sending response
            response = HttpResponse(file_data, content_type='text/plain')
            response['Content-Disposition'] = 'attachment; filename="test.txt"'

        except IOError:
            # handle file not exist case here
            response = HttpResponseNotFound('<h1>File not exist</h1>')
        return response
