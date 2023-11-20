function skill(id,percent){
    var bar = new ProgressBar.Line(id, {
        color: 'brown',
        strokeWidth: 2,
        trailWidth: 3,
        duration: 2400,
        step: function(state, bar){
            bar.setText(Math.round(bar.value()*100) + ' %');
        },
    });
    bar.animate(percent);
}
skill('#ae',0.80)
skill('#pr',0.80)
skill('#ph',0.70)
skill('#cs',0.70)
skill('#c4d',0.50)
skill('#hcj',0.50)
