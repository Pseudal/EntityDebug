import { ModCallback } from "isaac-typescript-definitions";

const MOD_NAME = "entitydebug";

let DebugConfig = {
  debug: 0 ,
  operator: 1,
  debugVariant:0,
  SubType:0,
}

main();

function postUpdate() {
  let entities = Isaac.GetRoomEntities();
  if (entities.length === 0) {
    //  DebugText = "no entity"
  } else {
    entities.forEach((ent) => {
      if (ent.IsActiveEnemy(true)) {
        //printConsole(`${ent}`)
        let EntSprite = ent.GetSprite();
        debugComing(ent, EntSprite);
      }
    });
  }
}

let debugEntity = undefined;
let debugSprite = undefined;

function debugComing(ent, sprite) {
  // if (ent.Type == DebugConfig.debug && ent.Variant == DebugConfig.debugVariant && ent.SubType == DebugConfig.SubType) {
if (ent.Type == 81 &&
    //ent.Variant == 2 &&
    ent.ToNPC().State === 10) {
    if (ent) {
      debugEntity = ent;
    }
    if (sprite) {
      debugSprite = sprite;
    }
  }
}

function debug() {
  if (debugEntity !== undefined) {
    Isaac.RenderText(
      `entity type : ${debugEntity.Type}, variant : ${debugEntity.Variant}, health : ${debugEntity.HitPoints}`,
      50,
      20,
      255,
      255,
      255,
      255,
    );
    Isaac.RenderText(
      `entity position : ${debugEntity.Position} colision : ${debugEntity.GridCollisionClass}`,
      50,
      30,
      255,
      255,
      255,
      255,
    );
    Isaac.RenderText(
      `npc state : ${debugEntity.ToNPC().State}, StateFrame : ${
        debugEntity.ToNPC().StateFrame
      }}`,
      50,
      40,
      255,
      255,
      255,
      255,
    );
    Isaac.RenderText(
      `Target : ${debugEntity.Target} TargetPos : ${debugEntity.TargetPosition}}`,
      50,
      50,
      255,
      255,
      255,
      255,
    );
    Isaac.RenderText(
      `V1 : ${debugEntity.ToNPC().V1}  V2 : ${debugEntity.ToNPC().V2}`,
      50,
      60,
      255,
      255,
      255,
      255,
    );
  } else {
    Isaac.RenderText(`No entity `, 50, 20, 255, 255, 255, 255);
  }
  if (debugSprite !== undefined) {
    Isaac.RenderText(
      `Playing : ${debugSprite.GetAnimation()}, frame : ${debugSprite.GetFrame()}, rotation : ${
        debugSprite.Rotation
      }`,
      50,
      70,
      255,
      255,
      255,
      255,
    );
    Isaac.RenderText(
      `I1 : ${debugEntity.ToNPC().I1}  I2 : ${debugEntity.ToNPC().I2}`,
      50,
      80,
      255,
      255,
      255,
      255,
    );
  } else {
    Isaac.RenderText(`No entity playing`, 50, 70, 255, 255, 255, 255);
  }
  if (debugEntity !== undefined) {
    let npc = debugEntity.ToNPC().State;
    if (npc == 1) {
      Isaac.RenderText(`State 1 true`, 50, 90, 255, 255, 255, 255);
    } else {
      {
        Isaac.RenderText(`State 1 false`, 50, 90, 255, 255, 255, 255);
      }
    }
    if (npc == 2) {
      Isaac.RenderText(`State 2 true`, 50, 100, 255, 255, 255, 255);
    } else {
      {
        Isaac.RenderText(`State 2 false`, 50, 100, 255, 255, 255, 255);
      }
    }
    if (npc == 3) {
      Isaac.RenderText(`State 3 true`, 50, 110, 255, 255, 255, 255);
    } else {
      {
        Isaac.RenderText(`State 3 false`, 50, 110, 255, 255, 255, 255);
      }
    }
    if (npc == 4) {
      Isaac.RenderText(`State 4 true`, 50, 120, 255, 255, 255, 255);
    } else {
      {
        Isaac.RenderText(`State 4 false`, 50, 120, 255, 255, 255, 255);
      }
    }
    if (npc == 5) {
      Isaac.RenderText(`State 5 true`, 50, 130, 255, 255, 255, 255);
    } else {
      {
        Isaac.RenderText(`State 5 false`, 50, 130, 255, 255, 255, 255);
      }
    }
    if (npc == 6) {
      Isaac.RenderText(`State 6 true`, 50, 140, 255, 255, 255, 255);
    } else {
      {
        Isaac.RenderText(`State 6 false`, 50, 140, 255, 255, 255, 255);
      }
    }
    if (npc == 7) {
      Isaac.RenderText(`State 7 true`, 50, 150, 255, 255, 255, 255);
    } else {
      {
        Isaac.RenderText(`State 7 false`, 50, 150, 255, 255, 255, 255);
      }
    }
    if (npc == 8) {
      Isaac.RenderText(`State 8 true`, 50, 160, 255, 255, 255, 255);
    } else {
      {
        Isaac.RenderText(`State 8 false`, 50, 160, 255, 255, 255, 255);
      }
    }
    if (npc == 9) {
      Isaac.RenderText(`State 9 true`, 50, 170, 255, 255, 255, 255);
    } else {
      {
        Isaac.RenderText(`State 9 false`, 50, 170, 255, 255, 255, 255);
      }
    }
    if (npc == 10) {
      Isaac.RenderText(`State 10 true`, 50, 180, 255, 255, 255, 255);
    } else {
      {
        Isaac.RenderText(`State 10 false`, 50, 180, 255, 255, 255, 255);
      }
    }
    if (npc == 11) {
      Isaac.RenderText(`State 11 true`, 50, 190, 255, 255, 255, 255);
    } else {
      {
        Isaac.RenderText(`State 11 false`, 50, 190, 255, 255, 255, 255);
      }
    }
    if (npc == 12) {
      Isaac.RenderText(`State 12 true`, 50, 200, 255, 255, 255, 255);
    } else {
      {
        Isaac.RenderText(`State 12 false`, 50, 200, 255, 255, 255, 255);
      }
    }
    if (npc == 13) {
      Isaac.RenderText(`State 13 true`, 50, 210, 255, 255, 255, 255);
    } else {
      {
        Isaac.RenderText(`State 13 false`, 50, 210, 255, 255, 255, 255);
      }
    }
    if (npc == 14) {
      Isaac.RenderText(`State 14 true`, 50, 220, 255, 255, 255, 255);
    } else {
      {
        Isaac.RenderText(`State 14 false`, 50, 220, 255, 255, 255, 255);
      }
    }
    if (npc == 15) {
      Isaac.RenderText(`State 15 true`, 50, 230, 255, 255, 255, 255);
    } else {
      {
        Isaac.RenderText(`State 15 false`, 50, 230, 255, 255, 255, 255);
      }
    }
    if (npc == 16) {
      Isaac.RenderText(`State 16 true`, 50, 240, 255, 255, 255, 255);
    } else {
      {
        Isaac.RenderText(`State 16 false`, 50, 240, 255, 255, 255, 255);
      }
    }
    if (npc == 17) {
      Isaac.RenderText(`State 17 true`, 50, 250, 255, 255, 255, 255);
    } else {
      {
        Isaac.RenderText(`State 17 false`, 50, 250, 255, 255, 255, 255);
      }
    }
    if (npc == 18) {
      Isaac.RenderText(`State 18 true`, 50, 260, 255, 255, 255, 255);
    } else {
      {
        Isaac.RenderText(`State 18 false`, 50, 260, 255, 255, 255, 255);
      }
    }
    // if(npc == 19){Isaac.RenderText(`State 1 true`, 50, 90, 255, 255, 255, 255)} else {{Isaac.RenderText(`State 1 false`, 50, 90, 255, 255, 255, 255)}}
    // if(npc == 20){Isaac.RenderText(`State 1 true`, 50, 90, 255, 255, 255, 255)} else {{Isaac.RenderText(`State 1 false`, 50, 90, 255, 255, 255, 255)}}
  } else {
    Isaac.RenderText(`State`, 50, 90, 255, 255, 255, 255);
  }
}

function main() {
  // Instantiate a new mod object, which grants the ability to add callback functions that
  // correspond to in-game events.
  const mod = RegisterMod(MOD_NAME, 1);

  // Register a callback function that corresponds to when a new run is started.
  mod.AddCallback(ModCallback.POST_GAME_STARTED, postGameStarted);

  // Print a message to the "log.txt" file.
  Isaac.DebugString(`${MOD_NAME} initialized.`);

  mod.AddCallback(ModCallback.POST_UPDATE, postUpdate);
  mod.AddCallback(ModCallback.POST_RENDER, debug);

  ModConfigMenu.RemoveCategory("EntityDebug");

  ModConfigMenu.AddSetting("EntityDebug", "Id", {
    CurrentSetting: (): number => DebugConfig.debug,
    Maximum: 9999,
    Minimum: 0,
    Display: (): string => `Id entity: ${DebugConfig.debug}`,
    Info: [],
    OnChange: (currentValue: number | boolean | undefined): void => {
      DebugConfig.debug = currentValue as number;
    },
    Type: ModConfigMenuOptionType.NUMBER,
  });
  ModConfigMenu.AddSetting("EntityDebug", "Id", {
    CurrentSetting: (): number => DebugConfig.operator,
    Maximum: 9999,
    Minimum: 0,
    Display: (): string => `+10`,
    Info: [],
    OnChange: (currentValue: number | boolean | undefined): void => {
      if(currentValue == 2)
        DebugConfig.debug+=10;
      else if(currentValue == 0)
        DebugConfig.debug-=10;
      // DebugConfig.debug = currentValue as number;
    },
    Type: ModConfigMenuOptionType.NUMBER,
  });
  ModConfigMenu.AddSetting("EntityDebug", "Id", {
    CurrentSetting: (): number => DebugConfig.operator,
    Maximum: 9999,
    Minimum: 0,
    Display: (): string => `+100`,
    Info: [],
    OnChange: (currentValue: number | boolean | undefined): void => {
      if(currentValue == 2)
        DebugConfig.debug+=100;
      else if(currentValue == 0)
        DebugConfig.debug-=100;
      // DebugConfig.debug = currentValue as number;
    },
    Type: ModConfigMenuOptionType.NUMBER,
  });
  ModConfigMenu.AddSetting("EntityDebug", "Id", {
    CurrentSetting: (): number => DebugConfig.operator,
    Maximum: 9999,
    Minimum: 0,
    Display: (): string => `+1000`,
    Info: [],
    OnChange: (currentValue: number | boolean | undefined): void => {
      if(currentValue == 2)
        DebugConfig.debug+=1000;
      else if(currentValue == 0)
        DebugConfig.debug-=1000;
      // DebugConfig.debug = currentValue as number;
    },
    Type: ModConfigMenuOptionType.NUMBER,
  });

  ModConfigMenu.AddSetting("EntityDebug", "Variant", {
    CurrentSetting: (): number => DebugConfig.debugVariant,
    Maximum: 9999,
    Minimum: 0,
    Display: (): string => `Entity variant: ${DebugConfig.debugVariant}`,
    Info: [],
    OnChange: (currentValue: number | boolean | undefined): void => {
      DebugConfig.debugVariant = currentValue as number;
    },
    Type: ModConfigMenuOptionType.NUMBER,
  });
  ModConfigMenu.AddSetting("EntityDebug", "Variant", {
    CurrentSetting: (): number => DebugConfig.operator,
    Maximum: 9999,
    Minimum: 0,
    Display: (): string => `+10`,
    Info: [],
    OnChange: (currentValue: number | boolean | undefined): void => {
      if(currentValue == 2)
        DebugConfig.debugVariant+=10;
      else if(currentValue == 0)
        DebugConfig.debugVariant-=10;
      // DebugConfig.debug = currentValue as number;
    },
    Type: ModConfigMenuOptionType.NUMBER,
  });
  ModConfigMenu.AddSetting("EntityDebug", "Variant", {
    CurrentSetting: (): number => DebugConfig.operator,
    Maximum: 9999,
    Minimum: 0,
    Display: (): string => `+100`,
    Info: [],
    OnChange: (currentValue: number | boolean | undefined): void => {
      if(currentValue == 2)
        DebugConfig.debugVariant+=100;
      else if(currentValue == 0)
        DebugConfig.debugVariant-=100;
      // DebugConfig.debug = currentValue as number;
    },
    Type: ModConfigMenuOptionType.NUMBER,
  });
  ModConfigMenu.AddSetting("EntityDebug", "Variant", {
    CurrentSetting: (): number => DebugConfig.operator,
    Maximum: 9999,
    Minimum: 0,
    Display: (): string => `+1000`,
    Info: [],
    OnChange: (currentValue: number | boolean | undefined): void => {
      if(currentValue == 2)
        DebugConfig.debugVariant+=1000;
      else if(currentValue == 0)
        DebugConfig.debugVariant-=1000;
      // DebugConfig.debug = currentValue as number;
    },
    Type: ModConfigMenuOptionType.NUMBER,
  });

  ModConfigMenu.AddSetting("EntityDebug", "SubType", {
    CurrentSetting: (): number => DebugConfig.SubType,
    Maximum: 9999,
    Minimum: 0,
    Display: (): string => `Entity Subtype: ${DebugConfig.SubType}`,
    Info: [],
    OnChange: (currentValue: number | boolean | undefined): void => {
      DebugConfig.SubType = currentValue as number;
    },
    Type: ModConfigMenuOptionType.NUMBER,
  });
  ModConfigMenu.AddSetting("EntityDebug", "SubType", {
    CurrentSetting: (): number => DebugConfig.operator,
    Maximum: 9999,
    Minimum: 0,
    Display: (): string => `+10`,
    Info: [],
    OnChange: (currentValue: number | boolean | undefined): void => {
      if(currentValue == 2)
        DebugConfig.SubType+=10;
      else if(currentValue == 0)
        DebugConfig.SubType-=10;
      // DebugConfig.debug = currentValue as number;
    },
    Type: ModConfigMenuOptionType.NUMBER,
  });
  ModConfigMenu.AddSetting("EntityDebug", "SubType", {
    CurrentSetting: (): number => DebugConfig.operator,
    Maximum: 9999,
    Minimum: 0,
    Display: (): string => `+100`,
    Info: [],
    OnChange: (currentValue: number | boolean | undefined): void => {
      if(currentValue == 2)
        DebugConfig.SubType+=100;
      else if(currentValue == 0)
        DebugConfig.SubType-=100;
      // DebugConfig.debug = currentValue as number;
    },
    Type: ModConfigMenuOptionType.NUMBER,
  });
  ModConfigMenu.AddSetting("EntityDebug", "SubType", {
    CurrentSetting: (): number => DebugConfig.operator,
    Maximum: 9999,
    Minimum: 0,
    Display: (): string => `+1000`,
    Info: [],
    OnChange: (currentValue: number | boolean | undefined): void => {
      if(currentValue == 2)
        DebugConfig.SubType+=1000;
      else if(currentValue == 0)
        DebugConfig.SubType-=1000;
      // DebugConfig.debug = currentValue as number;
    },
    Type: ModConfigMenuOptionType.NUMBER,
  });


}

function postGameStarted() {
  Isaac.DebugString("Callback fired: POST_GAME_STARTED");
}
