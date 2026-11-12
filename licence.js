/* Restauration Pro — interrupteur de licence : ACTIVÉ.
   Charge la vérification Licence Pro (toujours à jour) en lui transmettant data-produit / data-module.
   Pour désactiver la licence : vider ce fichier. */
(function(){var c=document.currentScript;if(!c)return;var s=document.createElement('script');
  s.src='https://aliand0810.github.io/licences/licence_check.js?v='+Math.floor(Date.now()/36e5);
  for(var k in c.dataset)s.dataset[k]=c.dataset[k];
  c.parentNode.insertBefore(s,c.nextSibling)})();
