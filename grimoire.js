(function() {
    var underscore = '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.7.0/underscore-min.js';

    function loadScript(url, callback) {
        var head   = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        var done   = false;

        script.src = url;

        script.onload = script.onreadystatechange = function() {
            if ( ! done && (
                 !this.readyState ||
                 'loaded' === this.readyState ||
                 'complete' === this.readyState
                )
            ) {
                done = true;

                script.onload = script.onreadystatechange = null;

                head.removeChild(script);

                if ('function' === typeof callback) {
                    callback();
                }
            }
        };

        head.appendChild(script);

        return true;
    }

    loadScript(underscore, resolveGrimoire);

    function resolveGrimoire() {
        bungieNetPlatform.destinyService.GetMyGrimoire(1, true, false, 0, function(data) {
            var fragments = {
                'Ghost Fragment: Titan' : 'http://youtu.be/gsMs12c--30?t=6m47s',
                'Ghost Fragment: Hunter' : 'http://youtu.be/kjl3AVu2Yak?t=3m10s',
                'Ghost Fragment: Warlock' : 'http://youtu.be/QsG6r4qhpl0?t=21s',
                'Ghost Fragment: Warlock 2' : 'http://youtu.be/rS4OOf4InQo?t=5m10s',
                'Ghost Fragment: Human' : 'http://youtu.be/kjl3AVu2Yak?t=8m37s',
                'Ghost Fragment: Human 2' : 'http://youtu.be/OvYiU_zsURI?t=24s',
                'Ghost Fragment: Human 3' : 'http://youtu.be/gsMs12c--30?t=9m26s',
                'Ghost Fragment: Human 4' : 'http://youtu.be/gsMs12c--30?t=8m28s',
                'Ghost Fragment: Awoken' : 'http://youtu.be/gsMs12c--30?t=13m23s',
                'Ghost Fragment: Awoken 2' : 'http://youtu.be/OvYiU_zsURI?t=2m11s',
                'Ghost Fragment: Exo' : 'http://youtu.be/gsMs12c--30?t=2m32s',
                'Ghost Fragment: Exo 2' : 'http://youtu.be/OvYiU_zsURI?t=4m21s',
                'Ghost Fragment: Ghosts' : 'http://youtu.be/OvYiU_zsURI?t=9m9s',
                'Ghost Fragment: Abilities' : 'http://youtu.be/kjl3AVu2Yak?t=7m16s',
                'Ghost Fragment: The Last Word' : 'http://youtu.be/QsG6r4qhpl0?t=59s',
                'Ghost Fragment: The Last Word 2' : 'http://youtu.be/kjl3AVu2Yak?t=3m35s',
                'Ghost Fragment: Thorn' : 'http://youtu.be/OvYiU_zsURI?t=6m13s',
                'Ghost Fragment: Thorn 2' : 'http://youtu.be/gsMs12c--30?t=12m15s',
                'Ghost Fragment: The Last Word 3' : 'http://youtu.be/-KvCmZ3hWV8?t=3m58s',
                'Ghost Fragment: The Traveler' : 'http://youtu.be/rS4OOf4InQo?t=4m34s',
                'Ghost Fragment: The Traveler 2' : 'http://youtu.be/gsMs12c--30?t=7m33s',
                'Ghost Fragment: The Traveler 3' : 'http://youtu.be/kjl3AVu2Yak?t=6m16s',
                'Ghost Fragment: Future War Cult' : 'http://youtu.be/gsMs12c--30?t=4m9s',
                'Ghost Fragment: Dead Orbit' : 'http://youtu.be/rS4OOf4InQo?t=2m10s',
                'Ghost Fragment: New Monarchy' : 'http://youtu.be/OvYiU_zsURI?t=1m8s',
                'Ghost Fragment: Exo Stranger' : 'http://youtu.be/kjl3AVu2Yak?t=2m27s',
                'Ghost Fragment: The Queen' : 'http://youtu.be/gsMs12c--30?t=15m36s',
                'Ghost Fragment: The Queen&#39;s Brother' : 'http://youtu.be/gsMs12c--30?t=14m56s',
                'Ghost Fragment: Rasputin 2' : 'http://youtu.be/-KvCmZ3hWV8?t=54s',
                'Ghost Fragment: Rasputin 3' : 'http://youtu.be/-KvCmZ3hWV8?t=1m29s',
                'Ghost Fragment: Legends' : 'http://youtu.be/OvYiU_zsURI?t=3m28s',
                'Ghost Fragment: Legends 2' : 'http://youtu.be/kjl3AVu2Yak?t=7m56s',
                'Ghost Fragment: Legends 3' : 'http://youtu.be/gsMs12c--30?t=34s',
                'Ghost Fragment: Mysteries' : 'http://youtu.be/kjl3AVu2Yak?t=24s',
                'Ghost Fragment: Mysteries 2' : 'http://youtu.be/gsMs12c--30?t=14m11s',
                'Ghost Fragment: Fallen' : 'http://youtu.be/kjl3AVu2Yak?t=4m20s',
                'Ghost Fragment: Fallen 2' : 'http://youtu.be/kjl3AVu2Yak?t=3m57s',
                'Ghost Fragment: Hive' : 'http://youtu.be/rS4OOf4InQo?t=3s',
                'Ghost Fragment: Hive 2' : 'http://youtu.be/kjl3AVu2Yak?t=6m45s',
                'Ghost Fragment: Hive 3' : 'http://youtu.be/-KvCmZ3hWV8?t=3s',
                'Ghost Fragment: Hive 4' : 'http://youtu.be/-KvCmZ3hWV8?t=3m24s',
                'Ghost Fragment: Vex' : 'http://youtu.be/OvYiU_zsURI?t=3m6s',
                'Ghost Fragment: Vex 2' : 'http://youtu.be/OvYiU_zsURI?t=10m19s',
                'Ghost Fragment: Vex 3' : 'http://youtu.be/OvYiU_zsURI?t=5m12s',
                'Ghost Fragment: Cabal' : 'http://youtu.be/gsMs12c--30?t=3s',
                'Ghost Fragment: Cabal 2' : 'http://youtu.be/gsMs12c--30?t=5m',
                'Ghost Fragment: Darkness' : 'http://youtu.be/kjl3AVu2Yak?t=3s',
                'Ghost Fragment: Darkness 2' : 'http://youtu.be/rS4OOf4InQo?t=3m18s',
                'Ghost Fragment: Darkness 3' : 'http://youtu.be/kjl3AVu2Yak?t=5m26s',
                'Ghost Fragment: Darkness 4' : 'http://youtu.be/OvYiU_zsURI?t=11m22s',
                'Ghost Fragment: Mercury' : 'http://youtu.be/rS4OOf4InQo?t=4m9s',
                'Ghost Fragment: Venus' : 'http://youtu.be/OvYiU_zsURI?t=8m6s',
                'Ghost Fragment: Ishtar Sink' : 'http://youtu.be/OvYiU_zsURI?t=3s',
                'Ghost Fragment: Earth' : 'http://youtu.be/kjl3AVu2Yak?t=1m15s',
                'Ghost Fragment: Old Russia' : 'http://youtu.be/kjl3AVu2Yak?t=1m36s',
                'Ghost Fragment: The Golden Age' : 'http://youtu.be/gsMs12c--30?t=1m38s',
                'Ghost Fragment: The Golden Age 2' : 'http://youtu.be/gsMs12c--30?t=10m17s',
                'Ghost Fragment: The Dark Age' : 'http://youtu.be/kjl3AVu2Yak?t=4m53s',
                'Ghost Fragment: The Dark Age 2' : 'http://youtu.be/OvYiU_zsURI?t=7m4s',
                'Ghost Fragment: The City Age' : 'http://youtu.be/QsG6r4qhpl0?t=3s',
                'Ghost Fragment: The City Age 2' : 'http://youtu.be/q3MU1fkJxa8?t=3s',
                'Ghost Fragment: Moon' : 'http://youtu.be/rS4OOf4InQo?t=33s',
                'Ghost Fragment: The Ocean of Storms' : 'http://youtu.be/rS4OOf4InQo?t=1m7s',
                'Ghost Fragment: Mars' : 'http://youtu.be/gsMs12c--30?t=3m19s',
                'Ghost Fragment: Meridian Bay' : 'http://youtu.be/gsMs12c--30?t=11m19s',
                'Ghost Fragment: Jupiter' : 'http://youtu.be/kjl3AVu2Yak?t=9m31s',
                'Ghost Fragment: Saturn' : 'http://youtu.be/rS4OOf4InQo?t=2m42s',
            };
            var definitions = [];

            _.each(data.cardDefinitions, function(val) {
                definitions.push(val.cardName);
            });

            var missing = _.reject(_.keys(fragments), function(val) {
                return definitions.indexOf(val) > -1 ? true : false;
            });

            var tracker = $('<div>', {
                'id'    : 'grimoire_tracker',
                'style' : 'background:#FFF;width:30em;height:40em;margin:-17em 0 0 -17em;padding:2em;overflow:auto;z-index:100;position:fixed;top:50%;left:50%;'
            });

            var tracker_shadow = $('<div>', {
                'class' : 'tracker_shadow',
                'style' : 'background:#000;filter:alpha(opacity=75);width:100%;height:100%;opacity:.75;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=75)";position:fixed;top:0;left:0;z-index:99;'
            });

            var addEntry = function(entry) {
                var href = fragments[entry];

                return $('<p>', { 'style' : 'margin:.25em 0;' })
                    .append($('<a>', {
                        'href'   : href,
                        'target' : '_blank',
                        'style'  : 'color:#2D3137;text-decoration:underline;'
                    }).html(entry));
            };

            _.each(missing, function(val) {
                tracker.append(addEntry(val));
            });

            tracker.prepend($('<a>', {
                'href'  : '#',
                'class' : 'tracker_close',
                'style' : 'text-decoration:underline;position:absolute;top:0;right:.5em;'
            }).text('Close'));

            $(document).one('click', '.tracker_close, .tracker_shadow', function(e) {
                e.preventDefault();

                tracker.add(tracker_shadow)
                    .remove();
            });

            $('body').append(tracker, tracker_shadow);
        });
    }
})();
