// document.write( '<script type="text/javascript" src="cookie2.js"></script>' );
// document.write( '<script type="text/javascript" src="cookie4.js"></script>' );

function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options) {
  options = options || {};

  var expires = options.expires;

  if (typeof expires == "number" && expires) {
    var d = new Date();
    d.setTime(d.getTime() + expires * 1000);
    expires = options.expires = d;
  }
  if (expires && expires.toUTCString) {
    options.expires = expires.toUTCString();
  }

  var updatedCookie = name + "=" + encodeURIComponent(value);

  for (var propName in options) {
    updatedCookie += "; " + propName;
    var propValue = options[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }

  document.cookie = updatedCookie;
}

function deleteCookie(name) {
  setCookie(name, "", {
    domain: 'fischer-l.github.io',
    expires: -1,
    path: '/'
  })
}

function splitAndSaveChunks(name, data, expire) {
    var limit = 100;
    //console.log('JSON.stringify splitAndSaveChunks', data);
    var whole = JSON.stringify(data),
        isEmpty = whole === '{}',
        i = 0,
        chunk;
    //console.log('after JSON.stringify splitAndSaveChunks', whole);
  console.log("Before deleting, cookie 1", decodeURIComponent(document.cookie).split("; ")); 
  
    while (getCookie(name + i)) {
        deleteCookie(name + i);
        i++;
    }

//     var start = Date.now();
//     while (Date.now() - start < 10) {}
    console.log("After deleting, cookie 1", decodeURIComponent(document.cookie).split("; ")); 
        
  
    if (!isEmpty) {
        i = 0;
        while (chunk = whole.substr(i * limit, limit)) {
            setCookie(name + i++, chunk, {
              domain: 'fischer-l.github.io',
              expires: (expire == undefined ? 365 : expire),
              path: '/'
            });
        }
    }
}

function joinAndGetChunks(name, ith) {
    var i = 0,
        chunks = '';

    while (getCookie(name + i)) {
        chunks += getCookie(name + i);
        i++;
    }
    if (chunks.length) {
      try {
        chunks = JSON.parse( chunks );
      } catch (e) {
        console.log("Failed at ", ith);
        console.log("Failed at chunks", chunks);
        console.log("Failed at cookie", decodeURIComponent(document.cookie).split("; ")); 
        throw e;
      }
    } else {
        chunks = {};
    }
    return chunks;
}

var pieceOfData1 = {
  'param_string': 'value_string',
  'param_obj': {
    'param_string': 'value_string',
    'param_digit': 324234234,
  },
  'param_digit': 324234234
};

var pieceOfData2 = {
  'temp_param_string': 'value_string',
  'temp_param_obj': {
    'temp_param_string': 'value_string',
    'temp_param_digit': 324234234,
  },
  'temp_param_digit': 324234234
};

var timeStamp = Date.now();
console.log("cookie1_timeStamp =", timeStamp);

for ( var i = 0; i < 20; i++ ) {
  pieceOfData1.cookie1_timeStamp = timeStamp;
  pieceOfData1[ 'param_index_' + i ] = 'dynamic_index_param_value_' + i + ' cookie1_timeStamp = ' + timeStamp;
  splitAndSaveChunks( 'my.special.cookie.persistent.', pieceOfData1 );

  //console.log( '1', pieceOfData1, joinAndGetChunks( 'my.special.cookie.persistent.' ) );

  if ( JSON.stringify( pieceOfData1 ) !== JSON.stringify( joinAndGetChunks( 'my.special.cookie.persistent.', i ) ) ) {
    console.warn( 'not passed' );
  }
  
  continue;
  pieceOfData2.cookie1_timeStamp = timeStamp;
  pieceOfData2[ 'temp_param' + i ] = 'ind_value_' + i + ' cookie1_timeStamp = ' + timeStamp;
  splitAndSaveChunks( 'my.special.cookie.session.', pieceOfData2, 0 );

  //console.log( '2', pieceOfData2, joinAndGetChunks( 'my.special.cookie.session.' ) );

  if ( JSON.stringify( pieceOfData2 ) !== JSON.stringify( joinAndGetChunks( 'my.special.cookie.session.', i ) ) ) {
    console.warn( 'not passed' );
  }
  //console.log('.....................................');
}
