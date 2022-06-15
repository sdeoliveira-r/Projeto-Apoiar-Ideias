from django.core.mail import send_mail


def enviar_email_confirmacao(apoiar):
    assunto = "Ideia apoiada com sucesso"
    conteudo = f"Parabéns por apoiar a ideia {apoiar.idea.nome} com o valor mensal de {apoiar.valor}"
    remetente = "primeiroapoiar@gmail.com"
    destinatario = [apoiar.email]
    send_mail(assunto, conteudo, remetente, destinatario)
