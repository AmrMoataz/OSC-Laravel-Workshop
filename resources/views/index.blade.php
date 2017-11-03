<html>

<head>
    <title>Logo Game</title>
    <style>
        .main-page {
            text-align: center;
            padding-top: 2%;
        }

        .game-body {
            align-items: center;
            text-align: center;
            justify-content: center;
            display: flex;
            flex-direction: column;
            margin-bottom: 40px;
        }

        input {
            margin: 10px;
            width: 40%;
            height: 8%;
            border: none;
            border-bottom: 2px solid #fc3;
            color: #fc3;
            font-size: 24px;
            text-align: center;
        }

        input:focus {
            outline: none;
        }
    </style>
</head>

<body>
    <div class="main-page">
      <h1> Developed by AmrMoataz :D </h1>
        <div class="game-body">
            <img class="logo" style="width:40%;" id="Image">
            <input id="user-try" type="text" onfocus="this.value = '';">
        </div>
        <div class="controls">
            <button class="control-btn" onclick="check()">Check</button>
            <p class="status"></p>
        </div>
        <div class="score">
            <p class="scor-count" id="ScoreCount">0</p>
        </div>
    </div>
    <script src="{{ asset('js/LogoGame.js') }}"> // JavaScript file is in public/js </script>
</body>
