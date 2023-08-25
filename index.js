let clear = setTimeout(() => {
	document.getElementById('time').innerText =  '"10"';
	return setTimeout(() => {
		document.getElementById('time').innerText = '"9"' ;
		return setTimeout(() => {
			document.getElementById('time').innerText = '"8"';
			return setTimeout(() => {
				document.getElementById('time').innerText ='"7"';
				return setTimeout(() => {
					document.getElementById('time').innerText = '"6"';
					return setTimeout(() => {
						document.getElementById('time').innerText = '"5"';
						return setTimeout(() => {
							document.getElementById('time').innerText = '"4"';
							return setTimeout(() => {
								document.getElementById('time').innerText = '"3"';
								return setTimeout(() => {
									document.getElementById('time').innerText = '"2"';
									return setTimeout(() => {
										document.getElementById('time').innerText = '"1"';
										return setTimeout(() => {
										 document.getElementById('time-container').innerText = "Happy independance day" ;
										}, 1000)
									}, 1000)
								}, 1000)
							}, 1000)
						}, 1000)
					}, 1000)
				}, 1000)
			}, 1000)
		}, 1000)
	}, 1000)
}, 1000)
