/*    
The languages supported by locale.js are: 
 1) English (en)
 2) Hebrew (he)
 3) French (fr)
 4) British English (en_GB)
 5) Arabic (ar)
 6) Japanese (ja)
 7) German (de)
 8) Belgian French (fr_BE)
 9) Spanish (es)
 10) Catalan (ca)
 11) Portuguese (pt)
 12) Italian (it)
 13) Polish (pl)
 14) Dutch (nl)
 15) Swedish (sv)
 16) Russian (ru)
 17) Chinese (zh)
 19) Traditional Chinese (zh_Hant)
*/
const locales = {
    en: {
      expiresOn: "Link expires on: ",
      refId: "Ref Id: ",
      requestedBy: "Requested by ",
      payNow: "Pay now",
      yourCart: "Your Cart",
      quantity: "Quantity",
      showLess: "Show Less",
      showMore: "Show More",
      miscellaneousCharges: "Miscellaneous charges",
      miscellaneousChargesDetail: "(includes taxes, shipping, discounts, offers etc.)",
      paymentTakingLonger: "Sorry! Your payment is taking longer than expected. Please check back again in sometime.",
      paymentLinkExpired: "Payment Link Expired",
      paymentReceived: "We have successfully received your payment",
      paymentLinkExpiredMessage: "Sorry, this payment link has expired. Please use below reference for further investigation.",
      paidSuccessfully: "Paid successfully",
      paymentPending: "Payment Pending",
      paymentFailed: "Payment Failed!",
      paymentCancelled: "Payment Cancelled",
      paymentUnderReview: "Payment under review",
      paymentSuccess: "Payment Success",
      partialPaymentCaptured: "Partial payment was captured.",
      somethingWentWrong: "Something went wrong",
      redirecting: "Redirecting ...",
      redirectingIn: "Redirecting in ",
      seconds: " seconds ...",
      unexpectedError: "An unexpected error occurred.",
      notAllowed: "You are not allowed to view this content.",
      errorCode: "Error code",
      errorMessage: "Error Message"
    },
    he: {
      expiresOn: "הקישור יפוג ב: ",
      refId: "מזהה הפניה: ",
      requestedBy: "ביקש על ידי ",
      payNow: "שלם עכשיו",
      yourCart: "העגלה שלך",
      quantity: "כמות",
      showLess: "הצג פחות",
      showMore: "הצג עוד",
      miscellaneousCharges: "חיובים נוספים",
      miscellaneousChargesDetail: "(כולל מיסים, משלוח, הנחות, הצעות וכו')",
      paymentTakingLonger: "מצטערים! התשלום שלך לוקח יותר זמן מהצפוי. אנא בדוק שוב בעוד זמן מה.",
      paymentLinkExpired: "הקישור לתשלום פג",
      paymentReceived: "קיבלנו את התשלום שלך בהצלחה",
      paymentLinkExpiredMessage: "מצטערים, הקישור הזה לתשלום פג. השתמש בהפניה למטה להמשך החקירה.",
      paidSuccessfully: "שולם בהצלחה",
      paymentPending: "התשלום ממתין",
      paymentFailed: "התשלום נכשל!",
      paymentCancelled: "התשלום בוטל",
      paymentUnderReview: "התשלום בבדיקה",
      paymentSuccess: "התשלום הצליח",
      partialPaymentCaptured: "תשלום חלקי נלכד.",
      somethingWentWrong: "משהו השתבש",
      redirecting: "מעביר...",
      redirectingIn: "מעביר בעוד ",
      seconds: " שניות ...",
      unexpectedError: "אירעה שגיאה בלתי צפויה.",
      notAllowed: "אינך מורשה לצפות בתוכן זה.",
      errorCode: "קוד שגיאה",
      errorMessage: "הודעת שגיאה"
    },
    fr: {
      expiresOn: "Le lien expire le: ",
      refId: "ID de référence: ",
      requestedBy: "Demandé par ",
      payNow: "Payer maintenant",
      yourCart: "Votre panier",
      quantity: "Quantité",
      showLess: "Afficher moins",
      showMore: "Afficher plus",
      miscellaneousCharges: "Frais divers",
      miscellaneousChargesDetail: "(comprend les taxes, les frais d'expédition, les remises, les offres, etc.)",
      paymentTakingLonger: "Désolé! Votre paiement prend plus de temps que prévu. Veuillez réessayer plus tard.",
      paymentLinkExpired: "Lien de paiement expiré",
      paymentReceived: "Nous avons bien reçu votre paiement",
      paymentLinkExpiredMessage: "Désolé, ce lien de paiement a expiré. Veuillez utiliser la référence ci-dessous pour une enquête plus approfondie.",
      paidSuccessfully: "Payé avec succès",
      paymentPending: "Paiement en attente",
      paymentFailed: "Échec du paiement!",
      paymentCancelled: "Paiement annulé",
      paymentUnderReview: "Paiement en cours de révision",
      paymentSuccess: "Paiement réussi",
      partialPaymentCaptured: "Paiement partiel capturé.",
      somethingWentWrong: "Quelque chose a mal tourné",
      redirecting: "Redirection...",
      redirectingIn: "Redirection dans ",
      seconds: " secondes...",
      unexpectedError: "Une erreur inattendue est survenue.",
      notAllowed: "Vous n'êtes pas autorisé à voir ce contenu.",
      errorCode: "Code d'erreur",
      errorMessage: "Message d'erreur"
    },
    en_GB: {
      expiresOn: "Link expires on: ",
      refId: "Ref Id: ",
      requestedBy: "Requested by ",
      payNow: "Pay now",
      yourCart: "Your Basket",
      quantity: "Quantity",
      showLess: "Show Less",
      showMore: "Show More",
      miscellaneousCharges: "Miscellaneous charges",
      miscellaneousChargesDetail: "(includes taxes, shipping, discounts, offers etc.)",
      paymentTakingLonger: "Sorry! Your payment is taking longer than expected. Please check back again in sometime.",
      paymentLinkExpired: "Payment Link Expired",
      paymentReceived: "We have successfully received your payment",
      paymentLinkExpiredMessage: "Sorry, this payment link has expired. Please use below reference for further investigation.",
      paidSuccessfully: "Paid successfully",
      paymentPending: "Payment Pending",
      paymentFailed: "Payment Failed!",
      paymentCancelled: "Payment Cancelled",
      paymentUnderReview: "Payment under review",
      paymentSuccess: "Payment Success",
      partialPaymentCaptured: "Partial payment was captured.",
      somethingWentWrong: "Something went wrong",
      redirecting: "Redirecting ...",
      redirectingIn: "Redirecting in ",
      seconds: " seconds ...",
      unexpectedError: "An unexpected error occurred.",
      notAllowed: "You are not allowed to view this content.",
      errorCode: "Error code",
      errorMessage: "Error Message"
      
    },
    ar: {
      expiresOn: "الرابط ينتهي في: ",
      refId: "معرف المرجع: ",
      requestedBy: "طلب بواسطة ",
      payNow: "ادفع الآن",
      yourCart: "سلة التسوق الخاصة بك",
      quantity: "الكمية",
      showLess: "عرض أقل",
      showMore: "عرض المزيد",
      miscellaneousCharges: "رسوم متنوعة",
      miscellaneousChargesDetail: "(يشمل الضرائب والشحن والخصومات والعروض وما إلى ذلك)",
      paymentTakingLonger: "عذرًا! يستغرق الدفع الخاص بك وقتًا أطول من المتوقع. يرجى التحقق مرة أخرى بعد فترة.",
      paymentLinkExpired: "انتهاء صلاحية رابط الدفع",
      paymentReceived: "لقد تلقينا دفعتك بنجاح",
      paymentLinkExpiredMessage: "عذرًا، انتهت صلاحية رابط الدفع هذا. يرجى استخدام المرجع أدناه لمزيد من التحقيق.",
      paidSuccessfully: "تم الدفع بنجاح",
      paymentPending: "الدفع معلق",
      paymentFailed: "فشل الدفع!",
      paymentCancelled: "تم إلغاء الدفع",
      paymentUnderReview: "الدفع قيد المراجعة",
      paymentSuccess: "نجاح الدفع",
      partialPaymentCaptured: "تم تحصيل دفعة جزئية.",
      somethingWentWrong: "حدث خطأ ما",
      redirecting: "إعادة توجيه ...",
      redirectingIn: "إعادة توجيه في ",
      seconds: " ثوانٍ ...",
      unexpectedError: "حدث خطأ غير متوقع.",
      notAllowed: "أنت غير مسموح لك بعرض هذا المحتوى.",
      errorCode: "رمز الخطأ",
      errorMessage: "رسالة الخطأ"
    },
    ja: {
      expiresOn: "リンクの有効期限は: ",
      refId: "参照 ID: ",
      requestedBy: "リクエスト者 ",
      payNow: "今すぐ支払う",
      yourCart: "あなたのカート",
      quantity: "数量",
      showLess: "表示を減らす",
      showMore: "もっと見る",
      miscellaneousCharges: "その他の料金",
      miscellaneousChargesDetail: "（税金、送料、割引、特典などが含まれます）",
      paymentTakingLonger: "申し訳ありません！ お支払いに予想以上の時間がかかっています。 しばらくしてから再度確認してください。",
      paymentLinkExpired: "支払いリンクの有効期限が切れました",
      paymentReceived: "お支払いが正常に完了しました",
      paymentLinkExpiredMessage: "申し訳ありませんが、この支払いリンクの有効期限が切れています。 詳細な調査については、以下の参照をご利用ください。",
      paidSuccessfully: "支払い完了",
      paymentPending: "保留中の支払い",
      paymentFailed: "支払い失敗！",
      paymentCancelled: "支払いがキャンセルされました",
      paymentUnderReview: "支払いの審査中",
      paymentSuccess: "支払い成功",
      partialPaymentCaptured: "部分的な支払いが取得されました。",
      somethingWentWrong: "何かがうまくいかなかった",
      redirecting: "リダイレクト中...",
      redirectingIn: "リダイレクト中 ",
      seconds: " 秒 ...",
      unexpectedError: "予期しないエラーが発生しました。",
      notAllowed: "このコンテンツを表示する権限がありません。",
      errorCode: "エラーコード",
      errorMessage: "エラーメッセージ"
    },
    de: {
      expiresOn: "Link läuft ab am: ",
      refId: "Referenz-ID: ",
      requestedBy: "Angefordert von ",
      payNow: "Jetzt bezahlen",
      yourCart: "Ihr Warenkorb",
      quantity: "Menge",
      showLess: "Weniger anzeigen",
      showMore: "Mehr anzeigen",
      miscellaneousCharges: "Sonstige Gebühren",
      miscellaneousChargesDetail: "(einschließlich Steuern, Versand, Rabatte, Angebote usw.)",
      paymentTakingLonger: "Entschuldigung! Ihre Zahlung dauert länger als erwartet. Bitte prüfen Sie später erneut.",
      paymentLinkExpired: "Zahlungslink abgelaufen",
      paymentReceived: "Wir haben Ihre Zahlung erfolgreich erhalten",
      paymentLinkExpiredMessage: "Entschuldigung, dieser Zahlungslink ist abgelaufen. Bitte verwenden Sie die folgende Referenz für weitere Untersuchungen.",
      paidSuccessfully: "Erfolgreich bezahlt",
      paymentPending: "Zahlung ausstehend",
      paymentFailed: "Zahlung fehlgeschlagen!",
      paymentCancelled: "Zahlung storniert",
      paymentUnderReview: "Zahlung wird überprüft",
      paymentSuccess: "Zahlung erfolgreich",
      partialPaymentCaptured: "Teilzahlung wurde erfasst.",
      somethingWentWrong: "Etwas ist schiefgelaufen",
      redirecting: "Weiterleiten ...",
      redirectingIn: "Weiterleiten in ",
      seconds: " Sekunden ...",
      unexpectedError: "Ein unerwarteter Fehler ist aufgetreten.",
      notAllowed: "Sie dürfen diesen Inhalt nicht ansehen.",
      errorCode: "Fehlercode",
      errorMessage: "Fehlermeldung"
    },
    fr_BE: {
      expiresOn: "Le lien expire le: ",
      refId: "ID de référence: ",
      requestedBy: "Demandé par ",
      payNow: "Payer maintenant",
      yourCart: "Votre panier",
      quantity: "Quantité",
      showLess: "Afficher moins",
      showMore: "Afficher plus",
      miscellaneousCharges: "Frais divers",
      miscellaneousChargesDetail: "(comprend les taxes, les frais d'expédition, les remises, les offres, etc.)",
      paymentTakingLonger: "Désolé! Votre paiement prend plus de temps que prévu. Veuillez réessayer plus tard.",
      paymentLinkExpired: "Lien de paiement expiré",
      paymentReceived: "Nous avons bien reçu votre paiement",
      paymentLinkExpiredMessage: "Désolé, ce lien de paiement a expiré. Veuillez utiliser la référence ci-dessous pour une enquête plus approfondie.",
      paidSuccessfully: "Payé avec succès",
      paymentPending: "Paiement en attente",
      paymentFailed: "Échec du paiement!",
      paymentCancelled: "Paiement annulé",
      paymentUnderReview: "Paiement en cours de révision",
      paymentSuccess: "Paiement réussi",
      partialPaymentCaptured: "Paiement partiel capturé.",
      somethingWentWrong: "Quelque chose a mal tourné",
      redirecting: "Redirection...",
      redirectingIn: "Redirection dans ",
      seconds: " secondes...",
      unexpectedError: "Une erreur inattendue est survenue.",
      notAllowed: "Vous n'êtes pas autorisé à voir ce contenu.",
      errorCode: "Code d'erreur",
      errorMessage: "Message d'erreur"
      
    },
    es: {
      expiresOn: "El enlace expira el: ",
      refId: "ID de referencia: ",
      requestedBy: "Solicitado por ",
      payNow: "Pagar ahora",
      yourCart: "Tu carrito",
      quantity: "Cantidad",
      showLess: "Mostrar menos",
      showMore: "Mostrar más",
      miscellaneousCharges: "Cargos varios",
      miscellaneousChargesDetail: "(incluye impuestos, envío, descuentos, ofertas, etc.)",
      paymentTakingLonger: "¡Lo siento! Tu pago está tardando más de lo esperado. Por favor, vuelve a verificarlo más tarde.",
      paymentLinkExpired: "Enlace de pago expirado",
      paymentReceived: "Hemos recibido tu pago con éxito",
      paymentLinkExpiredMessage: "Lo siento, este enlace de pago ha expirado. Por favor, usa la referencia a continuación para una investigación adicional.",
      paidSuccessfully: "Pagado exitosamente",
      paymentPending: "Pago Pendiente",
      paymentFailed: "¡Pago Fallido!",
      paymentCancelled: "Pago Cancelado",
      paymentUnderReview: "Pago en revisión",
      paymentSuccess: "Éxito en el pago",
      partialPaymentCaptured: "Pago parcial capturado.",
      somethingWentWrong: "Algo salió mal",
      redirecting: "Redirigiendo ...",
      redirectingIn: "Redirigiendo en ",
      seconds: " segundos ...",
      unexpectedError: "Ocurrió un error inesperado.",
      notAllowed: "No tienes permiso para ver este contenido.",
      errorCode: "Código de error",
      errorMessage: "Mensaje de error"
    },
    ca: {
      expiresOn: "L'enllaç caduca el: ",
      refId: "ID de referència: ",
      requestedBy: "Sol·licitat per ",
      payNow: "Paga ara",
      yourCart: "El teu carret",
      quantity: "Quantitat",
      showLess: "Mostrar menys",
      showMore: "Mostrar més",
      miscellaneousCharges: "Càrrecs diversos",
      miscellaneousChargesDetail: "(inclou impostos, enviaments, descomptes, ofertes, etc.)",
      paymentTakingLonger: "Ho sentim! El teu pagament està trigant més del que s'esperava. Si us plau, torna-ho a comprovar d'aquí a una estona.",
      paymentLinkExpired: "Enllaç de pagament caducat",
      paymentReceived: "Hem rebut el teu pagament amb èxit",
      paymentLinkExpiredMessage: "Ho sentim, aquest enllaç de pagament ha caducat. Si us plau, utilitza la referència següent per a més investigació.",
      paidSuccessfully: "Pagat amb èxit",
      paymentPending: "Pagament pendent",
      paymentFailed: "Pagament fallit!",
      paymentCancelled: "Pagament cancel·lat",
      paymentUnderReview: "Pagament en revisió",
      paymentSuccess: "Pagament amb èxit",
      partialPaymentCaptured: "Pagament parcial capturat.",
      somethingWentWrong: "Alguna cosa ha anat malament",
      redirecting: "Redirigint ...",
      redirectingIn: "Redirigint en ",
      seconds: " segons ...",
      unexpectedError: "S'ha produït un error inesperat.",
      notAllowed: "No tens permís per veure aquest contingut.",
      errorCode: "Codi d'error",
      errorMessage: "Missatge d'error"
    },
    pt: {
      expiresOn: "Link expira em: ",
      refId: "ID de referência: ",
      requestedBy: "Solicitado por ",
      payNow: "Pagar agora",
      yourCart: "Seu Carrinho",
      quantity: "Quantidade",
      showLess: "Mostrar menos",
      showMore: "Mostrar mais",
      miscellaneousCharges: "Encargos diversos",
      miscellaneousChargesDetail: "(inclui impostos, frete, descontos, ofertas, etc.)",
      paymentTakingLonger: "Desculpe! Seu pagamento está demorando mais do que o esperado. Por favor, volte novamente em algum momento.",
      paymentLinkExpired: "Link de Pagamento Expirado",
      paymentReceived: "Recebemos seu pagamento com sucesso",
      paymentLinkExpiredMessage: "Desculpe, este link de pagamento expirou. Por favor, use a referência abaixo para investigação adicional.",
      paidSuccessfully: "Pago com sucesso",
      paymentPending: "Pagamento Pendente",
      paymentFailed: "Pagamento Falhou!",
      paymentCancelled: "Pagamento Cancelado",
      paymentUnderReview: "Pagamento em análise",
      paymentSuccess: "Sucesso no pagamento",
      partialPaymentCaptured: "Pagamento parcial capturado.",
      somethingWentWrong: "Algo deu errado",
      redirecting: "Redirecionando ...",
      redirectingIn: "Redirecionando em ",
      seconds: " segundos ...",
      unexpectedError: "Ocorreu um erro inesperado.",
      notAllowed: "Você não tem permissão para ver este conteúdo.",
      errorCode: "Código de erro",
      errorMessage: "Mensagem de erro"

    },
    it: {
      expiresOn: "Link scade il: ",
      refId: "ID di riferimento: ",
      requestedBy: "Richiesto da ",
      payNow: "Paga ora",
      yourCart: "Il tuo carrello",
      quantity: "Quantità",
      showLess: "Mostra meno",
      showMore: "Mostra di più",
      miscellaneousCharges: "Spese varie",
      miscellaneousChargesDetail: "(inclusi tasse, spedizione, sconti, offerte, ecc.)",
      paymentTakingLonger: "Spiacenti! Il tuo pagamento sta impiegando più tempo del previsto. Controlla di nuovo tra un po'.",
      paymentLinkExpired: "Link di pagamento scaduto",
      paymentReceived: "Abbiamo ricevuto il tuo pagamento con successo",
      paymentLinkExpiredMessage: "Spiacenti, questo link di pagamento è scaduto. Utilizza il riferimento sottostante per ulteriori indagini.",
      paidSuccessfully: "Pagato con successo",
      paymentPending: "Pagamento in sospeso",
      paymentFailed: "Pagamento fallito!",
      paymentCancelled: "Pagamento annullato",
      paymentUnderReview: "Pagamento in revisione",
      paymentSuccess: "Pagamento riuscito",
      partialPaymentCaptured: "Pagamento parziale catturato.",
      somethingWentWrong: "Qualcosa è andato storto",
      redirecting: "Reindirizzando ...",
      redirectingIn: "Reindirizzando in ",
      seconds: " secondi ...",
      unexpectedError: "Si è verificato un errore imprevisto.",
      notAllowed: "Non sei autorizzato a vedere questo contenuto.",
      errorCode: "Codice di errore",
      errorMessage: "Messaggio di errore"
    },
    pl: {
      expiresOn: "Link wygasa w dniu: ",
      refId: "Identyfikator referencyjny: ",
      requestedBy: "Zażądane przez ",
      payNow: "Zapłać teraz",
      yourCart: "Twój koszyk",
      quantity: "Ilość",
      showLess: "Pokaż mniej",
      showMore: "Pokaż więcej",
      miscellaneousCharges: "Różne opłaty",
      miscellaneousChargesDetail: "(obejmuje podatki, wysyłkę, rabaty, oferty itp.)",
      paymentTakingLonger: "Przepraszamy! Twoja płatność trwa dłużej niż oczekiwano. Sprawdź ponownie później.",
      paymentLinkExpired: "Link do płatności wygasł",
      paymentReceived: "Otrzymaliśmy twoją płatność pomyślnie",
      paymentLinkExpiredMessage: "Przepraszamy, ten link do płatności wygasł. Skorzystaj z poniższego odniesienia do dalszego dochodzenia.",
      paidSuccessfully: "Zapłacono pomyślnie",
      paymentPending: "Oczekująca płatność",
      paymentFailed: "Płatność nie powiodła się!",
      paymentCancelled: "Płatność anulowana",
      paymentUnderReview: "Płatność w trakcie przeglądu",
      paymentSuccess: "Sukces płatności",
      partialPaymentCaptured: "Częściowa płatność została przechwycona.",
      somethingWentWrong: "Coś poszło nie tak",
      redirecting: "Przekierowanie ...",
      redirectingIn: "Przekierowanie w ",
      seconds: " sekund ...",
      unexpectedError: "Wystąpił nieoczekiwany błąd.",
      notAllowed: "Nie masz uprawnień do przeglądania tej zawartości.",
      errorCode: "Kod błędu",
      errorMessage: "Komunikat o błędzie"
    },
    nl: {
      expiresOn: "Link verloopt op: ",
      refId: "Ref Id: ",
      requestedBy: "Aangevraagd door ",
      payNow: "Nu betalen",
      yourCart: "Je winkelwagen",
      quantity: "Hoeveelheid",
      showLess: "Toon minder",
      showMore: "Toon meer",
      miscellaneousCharges: "Diverse kosten",
      miscellaneousChargesDetail: "(inclusief belastingen, verzending, kortingen, aanbiedingen, enz.)",
      paymentTakingLonger: "Sorry! Je betaling duurt langer dan verwacht. Controleer het later opnieuw.",
      paymentLinkExpired: "Betaallink verlopen",
      paymentReceived: "We hebben je betaling succesvol ontvangen",
      paymentLinkExpiredMessage: "Sorry, deze betaallink is verlopen. Gebruik de onderstaande referentie voor verder onderzoek.",
      paidSuccessfully: "Succesvol betaald",
      paymentPending: "Betaling in behandeling",
      paymentFailed: "Betaling mislukt!",
      paymentCancelled: "Betaling geannuleerd",
      paymentUnderReview: "Betaling in behandeling",
      paymentSuccess: "Betaling geslaagd",
      partialPaymentCaptured: "Deelbetaling is vastgelegd.",
      somethingWentWrong: "Er is iets misgegaan",
      redirecting: "Doorverwijzen ...",
      redirectingIn: "Doorverwijzen in ",
      seconds: " seconden ...",
      unexpectedError: "Er is een onverwachte fout opgetreden.",
      notAllowed: "Je mag deze inhoud niet bekijken.",
      errorCode: "Foutcode",
      errorMessage: "Foutmelding"
    },
    sv: {
      expiresOn: "Länken upphör att gälla den: ",
      refId: "Referens-ID: ",
      requestedBy: "Begärd av ",
      payNow: "Betala nu",
      yourCart: "Din varukorg",
      quantity: "Antal",
      showLess: "Visa mindre",
      showMore: "Visa mer",
      miscellaneousCharges: "Diverse avgifter",
      miscellaneousChargesDetail: "(inklusive skatter, frakt, rabatter, erbjudanden osv.)",
      paymentTakingLonger: "Ledsen! Din betalning tar längre tid än väntat. Vänligen kontrollera igen senare.",
      paymentLinkExpired: "Betalningslänk har upphört att gälla",
      paymentReceived: "Vi har mottagit din betalning",
      paymentLinkExpiredMessage: "Tyvärr, denna betalningslänk har upphört att gälla. Använd nedanstående referens för ytterligare utredning.",
      paidSuccessfully: "Betalad framgångsrikt",
      paymentPending: "Betalning väntar",
      paymentFailed: "Betalning misslyckades!",
      paymentCancelled: "Betalning avbruten",
      paymentUnderReview: "Betalning under granskning",
      paymentSuccess: "Betalning lyckades",
      partialPaymentCaptured: "Delbetalning har fångats.",
      somethingWentWrong: "Något gick fel",
      redirecting: "Omdirigerar ...",
      redirectingIn: "Omdirigerar om ",
      seconds: " sekunder ...",
      unexpectedError: "Ett oväntat fel inträffade.",
      notAllowed: "Du har inte behörighet att se detta innehåll.",
      errorCode: "Felkod",
      errorMessage: "Felmeddelande"
    },
    ru: {
      expiresOn: "Ссылка истекает: ",
      refId: "ID ссылки: ",
      requestedBy: "Запрошено ",
      payNow: "Оплатить сейчас",
      yourCart: "Ваша корзина",
      quantity: "Количество",
      showLess: "Показать меньше",
      showMore: "Показать больше",
      miscellaneousCharges: "Прочие сборы",
      miscellaneousChargesDetail: "(включает налоги, доставку, скидки, предложения и т. д.)",
      paymentTakingLonger: "Извините! Ваш платеж занимает больше времени, чем ожидалось. Пожалуйста, проверьте позже.",
      paymentLinkExpired: "Срок действия ссылки оплаты истек",
      paymentReceived: "Мы успешно получили ваш платеж",
      paymentLinkExpiredMessage: "Извините, срок действия этой ссылки на оплату истек. Пожалуйста, используйте ссылку ниже для дальнейшего расследования.",
      paidSuccessfully: "Оплачено успешно",
      paymentPending: "Ожидание оплаты",
      paymentFailed: "Платеж не прошел!",
      paymentCancelled: "Платеж отменен",
      paymentUnderReview: "Платеж на рассмотрении",
      paymentSuccess: "Платеж успешен",
      partialPaymentCaptured: "Частичный платеж захвачен.",
      somethingWentWrong: "Что-то пошло не так",
      redirecting: "Перенаправление...",
      redirectingIn: "Перенаправление через ",
      seconds: " секунд ...",
      unexpectedError: "Произошла неожиданная ошибка.",
      notAllowed: "Вам не разрешено просматривать этот контент.",
      errorCode: "Код ошибки",
      errorMessage: "Сообщение об ошибке"
    },
    zh: {
      expiresOn: "链接将于以下时间过期: ",
      refId: "参考编号: ",
      requestedBy: "请求者: ",
      payNow: "立即付款",
      yourCart: "您的购物车",
      quantity: "数量",
      showLess: "显示较少",
      showMore: "显示更多",
      miscellaneousCharges: "其他费用",
      miscellaneousChargesDetail: "(包括税费、运费、折扣、优惠等)",
      paymentTakingLonger: "抱歉！ 您的付款比预期的时间更长。 请稍后再回来查看。",
      paymentLinkExpired: "支付链接已过期",
      paymentReceived: "我们已成功收到您的付款",
      paymentLinkExpiredMessage: "抱歉，此支付链接已过期。 请使用以下参考进行进一步调查。",
      paidSuccessfully: "支付成功",
      paymentPending: "付款待定",
      paymentFailed: "付款失败！",
      paymentCancelled: "付款取消",
      paymentUnderReview: "付款审查中",
      paymentSuccess: "付款成功",
      partialPaymentCaptured: "已捕获部分付款。",
      somethingWentWrong: "发生了一些错误",
      redirecting: "重定向中...",
      redirectingIn: "将在 ",
      seconds: " 秒内重定向...",
      unexpectedError: "发生意外错误。",
      notAllowed: "您没有权限查看此内容。",
      errorCode: "错误代码",
      errorMessage: "错误信息"
    },
    zh_Hant: {
      expiresOn: "連結到期日期：",
      refId: "參考編號：",
      requestedBy: "請求者 ",
      payNow: "立即付款",
      yourCart: "你的購物車",
      quantity: "數量",
      showLess: "顯示較少",
      showMore: "顯示更多",
      miscellaneousCharges: "雜項費用",
      miscellaneousChargesDetail: "(包括稅金、運費、折扣、優惠等)",
      paymentTakingLonger: "抱歉！您的付款處理時間比預期長。請稍後再查看。",
      paymentLinkExpired: "付款連結已過期",
      paymentReceived: "我們已成功收到您的付款",
      paymentLinkExpiredMessage: "抱歉，此付款連結已過期。請使用以下參考進行進一步調查。",
      paidSuccessfully: "付款成功",
      paymentPending: "付款待處理",
      paymentFailed: "付款失敗！",
      paymentCancelled: "付款已取消",
      paymentUnderReview: "付款正在審核中",
      paymentSuccess: "支付成功",
      partialPaymentCaptured: "部分付款已被捕獲。",
      somethingWentWrong: "出了點問題",
      redirecting: "重定向...",
      redirectingIn: "重定向到",
      seconds: " 秒...",
      unexpectedError: "發生了意外錯誤。",
      notAllowed: "您無權查看此內容。",
      errorCode: "錯誤代碼",
      errorMessage: "錯誤訊息"
    },
  };

  function getTranslations(locale_str) {
    var locale = locale_str || 'en'; // defaults if locale is not present in payment details.
    return locales[locale] || locales['en']; // defaults if locale is not implemented in locales.
  }