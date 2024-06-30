var template = `<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<!-- Copyright C 2024 The BBJProjeK Organization -->
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=windows-1252">
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="Index" href="/pipermail">
  <link rel="made" href="mailto:support%40bbjprojek.org?Subject=Re%3A%20%5BTicket%5D%20%3D%3">
  <meta name="robots" content="index,nofollow">
  <title>[Ticket] ##TITLE##</title>

  <!-- Custom style and CSS -->
  <style type="text/css">pre { white-space: pre-wrap; }</style>
  <link rel="stylesheet" href="/xaspos/main.css" />
</head>
<body>
  <h1>[Ticket] ##TITLE##</h1>
  <b>##AUTHOR_EMAIL##</b>
  <br>
  <i>##DATE##</i>
  <ul>
    <li>Previous message (by thread): <a href="/pipermail">[Ticket] ##PREVIOUS_TITLE##</a>
    <li>
      <b>Messages ordered by:</b>
      <a href="#date">[ date ]</a>
      <a href="#thread">[ thread ]</a>
      <a href="#subject">[ subject ]</a>
      <a href="#author">[ author ]</a>
    </li>
  </ul>
  <hr>
  <!--beginarticle-->
  <pre>

##CONTENT##

        <a href="##CONTENT_LINK##">##CONTENT_LINK##</a>

  </pre>
  <!--endarticle-->
  <hr>
  <ul>
    <li>Previous message (by thread): <a href="/pipermail">[Ticket] ##PREVIOUS_TITLE##</a></li>
    <li>
      <b>Messages ordered by:</b>
      <a href="#date">[ date ]</a>
      <a href="#thread">[ thread ]</a>
      <a href="#subject">[ subject ]</a>
      <a href="#author">[ author ]</a>
    </li>
  </ul>
  <hr><br>
</body>
</html>
`;
