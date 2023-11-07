# `github_actions_organization_permissions`

Refer to the Terraform Registory for docs: [`github_actions_organization_permissions`](https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/actions_organization_permissions).

# `actionsOrganizationPermissions` Submodule <a name="`actionsOrganizationPermissions` Submodule" id="@cdktf/provider-github.actionsOrganizationPermissions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActionsOrganizationPermissions <a name="ActionsOrganizationPermissions" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/actions_organization_permissions github_actions_organization_permissions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new ActionsOrganizationPermissions(Construct Scope, string Id, ActionsOrganizationPermissionsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig">ActionsOrganizationPermissionsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig">ActionsOrganizationPermissionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.putAllowedActionsConfig">PutAllowedActionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.putEnabledRepositoriesConfig">PutEnabledRepositoriesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.resetAllowedActions">ResetAllowedActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.resetAllowedActionsConfig">ResetAllowedActionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.resetEnabledRepositoriesConfig">ResetEnabledRepositoriesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutAllowedActionsConfig` <a name="PutAllowedActionsConfig" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.putAllowedActionsConfig"></a>

```csharp
private void PutAllowedActionsConfig(ActionsOrganizationPermissionsAllowedActionsConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.putAllowedActionsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfig">ActionsOrganizationPermissionsAllowedActionsConfig</a>

---

##### `PutEnabledRepositoriesConfig` <a name="PutEnabledRepositoriesConfig" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.putEnabledRepositoriesConfig"></a>

```csharp
private void PutEnabledRepositoriesConfig(ActionsOrganizationPermissionsEnabledRepositoriesConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.putEnabledRepositoriesConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfig">ActionsOrganizationPermissionsEnabledRepositoriesConfig</a>

---

##### `ResetAllowedActions` <a name="ResetAllowedActions" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.resetAllowedActions"></a>

```csharp
private void ResetAllowedActions()
```

##### `ResetAllowedActionsConfig` <a name="ResetAllowedActionsConfig" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.resetAllowedActionsConfig"></a>

```csharp
private void ResetAllowedActionsConfig()
```

##### `ResetEnabledRepositoriesConfig` <a name="ResetEnabledRepositoriesConfig" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.resetEnabledRepositoriesConfig"></a>

```csharp
private void ResetEnabledRepositoriesConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ActionsOrganizationPermissions resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

ActionsOrganizationPermissions.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

ActionsOrganizationPermissions.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

ActionsOrganizationPermissions.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

ActionsOrganizationPermissions.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ActionsOrganizationPermissions resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ActionsOrganizationPermissions to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ActionsOrganizationPermissions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/actions_organization_permissions#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ActionsOrganizationPermissions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.allowedActionsConfig">AllowedActionsConfig</a></code> | <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference">ActionsOrganizationPermissionsAllowedActionsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.enabledRepositoriesConfig">EnabledRepositoriesConfig</a></code> | <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference">ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.allowedActionsConfigInput">AllowedActionsConfigInput</a></code> | <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfig">ActionsOrganizationPermissionsAllowedActionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.allowedActionsInput">AllowedActionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.enabledRepositoriesConfigInput">EnabledRepositoriesConfigInput</a></code> | <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfig">ActionsOrganizationPermissionsEnabledRepositoriesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.enabledRepositoriesInput">EnabledRepositoriesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.allowedActions">AllowedActions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.enabledRepositories">EnabledRepositories</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AllowedActionsConfig`<sup>Required</sup> <a name="AllowedActionsConfig" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.allowedActionsConfig"></a>

```csharp
public ActionsOrganizationPermissionsAllowedActionsConfigOutputReference AllowedActionsConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference">ActionsOrganizationPermissionsAllowedActionsConfigOutputReference</a>

---

##### `EnabledRepositoriesConfig`<sup>Required</sup> <a name="EnabledRepositoriesConfig" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.enabledRepositoriesConfig"></a>

```csharp
public ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference EnabledRepositoriesConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference">ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference</a>

---

##### `AllowedActionsConfigInput`<sup>Optional</sup> <a name="AllowedActionsConfigInput" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.allowedActionsConfigInput"></a>

```csharp
public ActionsOrganizationPermissionsAllowedActionsConfig AllowedActionsConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfig">ActionsOrganizationPermissionsAllowedActionsConfig</a>

---

##### `AllowedActionsInput`<sup>Optional</sup> <a name="AllowedActionsInput" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.allowedActionsInput"></a>

```csharp
public string AllowedActionsInput { get; }
```

- *Type:* string

---

##### `EnabledRepositoriesConfigInput`<sup>Optional</sup> <a name="EnabledRepositoriesConfigInput" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.enabledRepositoriesConfigInput"></a>

```csharp
public ActionsOrganizationPermissionsEnabledRepositoriesConfig EnabledRepositoriesConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfig">ActionsOrganizationPermissionsEnabledRepositoriesConfig</a>

---

##### `EnabledRepositoriesInput`<sup>Optional</sup> <a name="EnabledRepositoriesInput" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.enabledRepositoriesInput"></a>

```csharp
public string EnabledRepositoriesInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `AllowedActions`<sup>Required</sup> <a name="AllowedActions" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.allowedActions"></a>

```csharp
public string AllowedActions { get; }
```

- *Type:* string

---

##### `EnabledRepositories`<sup>Required</sup> <a name="EnabledRepositories" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.enabledRepositories"></a>

```csharp
public string EnabledRepositories { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissions.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ActionsOrganizationPermissionsAllowedActionsConfig <a name="ActionsOrganizationPermissionsAllowedActionsConfig" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new ActionsOrganizationPermissionsAllowedActionsConfig {
    object GithubOwnedAllowed,
    string[] PatternsAllowed = null,
    object VerifiedAllowed = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfig.property.githubOwnedAllowed">GithubOwnedAllowed</a></code> | <code>object</code> | Whether GitHub-owned actions are allowed in the organization. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfig.property.patternsAllowed">PatternsAllowed</a></code> | <code>string[]</code> | Specifies a list of string-matching patterns to allow specific action(s). |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfig.property.verifiedAllowed">VerifiedAllowed</a></code> | <code>object</code> | Whether actions in GitHub Marketplace from verified creators are allowed. |

---

##### `GithubOwnedAllowed`<sup>Required</sup> <a name="GithubOwnedAllowed" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfig.property.githubOwnedAllowed"></a>

```csharp
public object GithubOwnedAllowed { get; set; }
```

- *Type:* object

Whether GitHub-owned actions are allowed in the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/actions_organization_permissions#github_owned_allowed ActionsOrganizationPermissions#github_owned_allowed}

---

##### `PatternsAllowed`<sup>Optional</sup> <a name="PatternsAllowed" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfig.property.patternsAllowed"></a>

```csharp
public string[] PatternsAllowed { get; set; }
```

- *Type:* string[]

Specifies a list of string-matching patterns to allow specific action(s).

Wildcards, tags, and SHAs are allowed. For example, 'monalisa/octocat@', 'monalisa/octocat@v2', 'monalisa/'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/actions_organization_permissions#patterns_allowed ActionsOrganizationPermissions#patterns_allowed}

---

##### `VerifiedAllowed`<sup>Optional</sup> <a name="VerifiedAllowed" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfig.property.verifiedAllowed"></a>

```csharp
public object VerifiedAllowed { get; set; }
```

- *Type:* object

Whether actions in GitHub Marketplace from verified creators are allowed.

Set to 'true' to allow all GitHub Marketplace actions by verified creators.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/actions_organization_permissions#verified_allowed ActionsOrganizationPermissions#verified_allowed}

---

### ActionsOrganizationPermissionsConfig <a name="ActionsOrganizationPermissionsConfig" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new ActionsOrganizationPermissionsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string EnabledRepositories,
    string AllowedActions = null,
    ActionsOrganizationPermissionsAllowedActionsConfig AllowedActionsConfig = null,
    ActionsOrganizationPermissionsEnabledRepositoriesConfig EnabledRepositoriesConfig = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.enabledRepositories">EnabledRepositories</a></code> | <code>string</code> | The policy that controls the repositories in the organization that are allowed to run GitHub Actions. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.allowedActions">AllowedActions</a></code> | <code>string</code> | The permissions policy that controls the actions that are allowed to run. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.allowedActionsConfig">AllowedActionsConfig</a></code> | <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfig">ActionsOrganizationPermissionsAllowedActionsConfig</a></code> | allowed_actions_config block. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.enabledRepositoriesConfig">EnabledRepositoriesConfig</a></code> | <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfig">ActionsOrganizationPermissionsEnabledRepositoriesConfig</a></code> | enabled_repositories_config block. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/actions_organization_permissions#id ActionsOrganizationPermissions#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `EnabledRepositories`<sup>Required</sup> <a name="EnabledRepositories" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.enabledRepositories"></a>

```csharp
public string EnabledRepositories { get; set; }
```

- *Type:* string

The policy that controls the repositories in the organization that are allowed to run GitHub Actions.

Can be one of: 'all', 'none', or 'selected'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/actions_organization_permissions#enabled_repositories ActionsOrganizationPermissions#enabled_repositories}

---

##### `AllowedActions`<sup>Optional</sup> <a name="AllowedActions" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.allowedActions"></a>

```csharp
public string AllowedActions { get; set; }
```

- *Type:* string

The permissions policy that controls the actions that are allowed to run.

Can be one of: 'all', 'local_only', or 'selected'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/actions_organization_permissions#allowed_actions ActionsOrganizationPermissions#allowed_actions}

---

##### `AllowedActionsConfig`<sup>Optional</sup> <a name="AllowedActionsConfig" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.allowedActionsConfig"></a>

```csharp
public ActionsOrganizationPermissionsAllowedActionsConfig AllowedActionsConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfig">ActionsOrganizationPermissionsAllowedActionsConfig</a>

allowed_actions_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/actions_organization_permissions#allowed_actions_config ActionsOrganizationPermissions#allowed_actions_config}

---

##### `EnabledRepositoriesConfig`<sup>Optional</sup> <a name="EnabledRepositoriesConfig" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.enabledRepositoriesConfig"></a>

```csharp
public ActionsOrganizationPermissionsEnabledRepositoriesConfig EnabledRepositoriesConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfig">ActionsOrganizationPermissionsEnabledRepositoriesConfig</a>

enabled_repositories_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/actions_organization_permissions#enabled_repositories_config ActionsOrganizationPermissions#enabled_repositories_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/actions_organization_permissions#id ActionsOrganizationPermissions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ActionsOrganizationPermissionsEnabledRepositoriesConfig <a name="ActionsOrganizationPermissionsEnabledRepositoriesConfig" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new ActionsOrganizationPermissionsEnabledRepositoriesConfig {
    double[] RepositoryIds
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfig.property.repositoryIds">RepositoryIds</a></code> | <code>double[]</code> | List of repository IDs to enable for GitHub Actions. |

---

##### `RepositoryIds`<sup>Required</sup> <a name="RepositoryIds" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfig.property.repositoryIds"></a>

```csharp
public double[] RepositoryIds { get; set; }
```

- *Type:* double[]

List of repository IDs to enable for GitHub Actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/actions_organization_permissions#repository_ids ActionsOrganizationPermissions#repository_ids}

---

## Classes <a name="Classes" id="Classes"></a>

### ActionsOrganizationPermissionsAllowedActionsConfigOutputReference <a name="ActionsOrganizationPermissionsAllowedActionsConfigOutputReference" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new ActionsOrganizationPermissionsAllowedActionsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.resetPatternsAllowed">ResetPatternsAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.resetVerifiedAllowed">ResetVerifiedAllowed</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPatternsAllowed` <a name="ResetPatternsAllowed" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.resetPatternsAllowed"></a>

```csharp
private void ResetPatternsAllowed()
```

##### `ResetVerifiedAllowed` <a name="ResetVerifiedAllowed" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.resetVerifiedAllowed"></a>

```csharp
private void ResetVerifiedAllowed()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.property.githubOwnedAllowedInput">GithubOwnedAllowedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.property.patternsAllowedInput">PatternsAllowedInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.property.verifiedAllowedInput">VerifiedAllowedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.property.githubOwnedAllowed">GithubOwnedAllowed</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.property.patternsAllowed">PatternsAllowed</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.property.verifiedAllowed">VerifiedAllowed</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfig">ActionsOrganizationPermissionsAllowedActionsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GithubOwnedAllowedInput`<sup>Optional</sup> <a name="GithubOwnedAllowedInput" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.property.githubOwnedAllowedInput"></a>

```csharp
public object GithubOwnedAllowedInput { get; }
```

- *Type:* object

---

##### `PatternsAllowedInput`<sup>Optional</sup> <a name="PatternsAllowedInput" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.property.patternsAllowedInput"></a>

```csharp
public string[] PatternsAllowedInput { get; }
```

- *Type:* string[]

---

##### `VerifiedAllowedInput`<sup>Optional</sup> <a name="VerifiedAllowedInput" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.property.verifiedAllowedInput"></a>

```csharp
public object VerifiedAllowedInput { get; }
```

- *Type:* object

---

##### `GithubOwnedAllowed`<sup>Required</sup> <a name="GithubOwnedAllowed" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.property.githubOwnedAllowed"></a>

```csharp
public object GithubOwnedAllowed { get; }
```

- *Type:* object

---

##### `PatternsAllowed`<sup>Required</sup> <a name="PatternsAllowed" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.property.patternsAllowed"></a>

```csharp
public string[] PatternsAllowed { get; }
```

- *Type:* string[]

---

##### `VerifiedAllowed`<sup>Required</sup> <a name="VerifiedAllowed" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.property.verifiedAllowed"></a>

```csharp
public object VerifiedAllowed { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfigOutputReference.property.internalValue"></a>

```csharp
public ActionsOrganizationPermissionsAllowedActionsConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsAllowedActionsConfig">ActionsOrganizationPermissionsAllowedActionsConfig</a>

---


### ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference <a name="ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.property.repositoryIdsInput">RepositoryIdsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.property.repositoryIds">RepositoryIds</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfig">ActionsOrganizationPermissionsEnabledRepositoriesConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RepositoryIdsInput`<sup>Optional</sup> <a name="RepositoryIdsInput" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.property.repositoryIdsInput"></a>

```csharp
public double[] RepositoryIdsInput { get; }
```

- *Type:* double[]

---

##### `RepositoryIds`<sup>Required</sup> <a name="RepositoryIds" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.property.repositoryIds"></a>

```csharp
public double[] RepositoryIds { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfigOutputReference.property.internalValue"></a>

```csharp
public ActionsOrganizationPermissionsEnabledRepositoriesConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-github.actionsOrganizationPermissions.ActionsOrganizationPermissionsEnabledRepositoriesConfig">ActionsOrganizationPermissionsEnabledRepositoriesConfig</a>

---



