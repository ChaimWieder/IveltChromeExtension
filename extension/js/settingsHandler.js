(function(){

	if(chrome.storage){
		chrome.storage.local.get(['alwaysCopyTopic', 'stickyPostButtons', 'copyAttachments', 'forceUpdateTopicMapCache', 'cachedTopicMappingExpire', 'hideUserName', 'warnOnLosingPost','backgroundSync', 'backgroundSyncPosts'], function(items){
			if(items.hideUserName){
				let userName = document.querySelector('.header-avatar .username');
				if (userName)
					userName.innerText = 'הא?';
				let avatar = document.querySelector('.header-avatar .avatar');
				if (avatar)
					avatar.style.display = "none";
			}

			if(items.warnOnLosingPost){
				var form = document.querySelector('form[id="qr_postform"]') || document.querySelector('form[id="postform"]');

				if(form){
					// all action buttons are type=submit
					form.addEventListener('submit', function(){
						window.removeEventListener('beforeunload', avoidLosingPost);
					});

					window.addEventListener('beforeunload', avoidLosingPost);
				}

				let notificationLinks = document.querySelectorAll('#mark_all_notifications a, .pagination a[href*="mark="].mark');
				notificationLinks.forEach (link => {
					// for testing while development
					// console.log(link);
					// link.setAttribute('href', 'javascript:void(0);');

					link.addEventListener('click', function(event) {
						let confirmation = confirm('איר זענט זיכער אז איר ווילט פארצייכענען אלעס ווי געליינט?');
						if (!confirmation) {
							event.preventDefault();
							event.stopImmediatePropagation();
						}
					}, true);
				});

			}
            
            let e = document.createElement('div');
            e.style.display = "none";
            e.setAttribute('id', 'iveltHelperSettings');
            e.setAttribute('data-background-sync',items.backgroundSync);
            e.setAttribute('data-background-sync-posts',items.backgroundSyncPosts);
			e.setAttribute('data-always-copy-topic',items.alwaysCopyTopic);
			e.setAttribute('data-copy-attachments',items.copyAttachments);
			e.setAttribute('data-cached-topic-mapping-expire',items.cachedTopicMappingExpire);
			e.setAttribute('data-force-update-topic-map-cache',items.forceUpdateTopicMapCache);
			e.setAttribute('data-sticky-post-buttons',items.stickyPostButtons);
			document.body.appendChild(e);

			if(items.forceUpdateTopicMapCache === true){
				chrome.storage.local.set({ forceUpdateTopicMapCache: false }, function () {
					console.log('Topic mapping set back to false');
				});
			}
		});
	}

	function avoidLosingPost(event){
		var textarea = document.querySelector('textarea[name=message]');

		if(textarea && textarea.value){
			event.preventDefault();
			return event.returnValue = 'Changes you made may not be saved. Are you sure you want to lose you post?';
		}
	}
}())
