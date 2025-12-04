from deep_translator import GoogleTranslator

tradutor = GoogleTranslator(source="en", target="pt")

texto = "Hello World!"

traducao = tradutor.translate(texto)
print(traducao)