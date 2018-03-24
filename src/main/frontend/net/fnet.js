import $ from 'jquery';

function post(url, data = null, success = null) {
    let req = {
            url: url,
            type: 'POST',
            contentType:'application/json; charset=utf-8',
            dataType: 'json'
        };

        if (data != null)    req['data']    = JSON.stringify(data);
        if (success != null) req['success'] = success;

        $.ajax(req);
    }

export { post };
