package org.mochinet2.models;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import javax.persistence.Embeddable;

@Embeddable
public class Color {

    @NotNull
    @Size(min = 0, max = 255)
    public int red;

    @NotNull
    @Size(min = 0, max = 255)
    public int green;

    @NotNull
    @Size(min = 0, max = 255)
    public int blue;

    public Color() {
    }

    public Color(int red, int green, int blue) {
        this.red   = red;
        this.green = green;
        this.blue  = blue;
    }
}
