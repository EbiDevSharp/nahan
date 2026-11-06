using Workerd = import "/workerd/workerd.capnp";

const config :Workerd.Config = (
  services = [
    (name = "static-obfuscation", worker = (
      compatibilityDate = "2024-03-01",
      compatibilityFlags = ["disallow_eval_during_startup"],
      modules = [
        (name = "test", esModule = embed "worker-runtime.mjs"),
        (name = "original", esModule = embed "../_worker.js"),
        (name = "obfuscated", esModule = embed "../_worker-obfuscated.js")
      ]
    ))
  ]
);
