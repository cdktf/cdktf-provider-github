# `actionsHostedRunner` Submodule <a name="`actionsHostedRunner` Submodule" id="@cdktf/provider-github.actionsHostedRunner"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActionsHostedRunner <a name="ActionsHostedRunner" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner github_actions_hosted_runner}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new ActionsHostedRunner(Construct Scope, string Id, ActionsHostedRunnerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig">ActionsHostedRunnerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig">ActionsHostedRunnerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.putImage">PutImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetImageGen">ResetImageGen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetImageVersion">ResetImageVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetMaximumRunners">ResetMaximumRunners</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetPublicIpEnabled">ResetPublicIpEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutImage` <a name="PutImage" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.putImage"></a>

```csharp
private void PutImage(ActionsHostedRunnerImage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.putImage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage">ActionsHostedRunnerImage</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.putTimeouts"></a>

```csharp
private void PutTimeouts(ActionsHostedRunnerTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeouts">ActionsHostedRunnerTimeouts</a>

---

##### `ResetImageGen` <a name="ResetImageGen" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetImageGen"></a>

```csharp
private void ResetImageGen()
```

##### `ResetImageVersion` <a name="ResetImageVersion" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetImageVersion"></a>

```csharp
private void ResetImageVersion()
```

##### `ResetMaximumRunners` <a name="ResetMaximumRunners" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetMaximumRunners"></a>

```csharp
private void ResetMaximumRunners()
```

##### `ResetPublicIpEnabled` <a name="ResetPublicIpEnabled" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetPublicIpEnabled"></a>

```csharp
private void ResetPublicIpEnabled()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ActionsHostedRunner resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

ActionsHostedRunner.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

ActionsHostedRunner.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

ActionsHostedRunner.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

ActionsHostedRunner.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ActionsHostedRunner resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ActionsHostedRunner to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ActionsHostedRunner that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ActionsHostedRunner to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.image">Image</a></code> | <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference">ActionsHostedRunnerImageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.lastActiveOn">LastActiveOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.machineSizeDetails">MachineSizeDetails</a></code> | <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList">ActionsHostedRunnerMachineSizeDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.platform">Platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.publicIps">PublicIps</a></code> | <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList">ActionsHostedRunnerPublicIpsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference">ActionsHostedRunnerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.imageGenInput">ImageGenInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.imageInput">ImageInput</a></code> | <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage">ActionsHostedRunnerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.imageVersionInput">ImageVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.maximumRunnersInput">MaximumRunnersInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.publicIpEnabledInput">PublicIpEnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.runnerGroupIdInput">RunnerGroupIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.sizeInput">SizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeouts">ActionsHostedRunnerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.imageGen">ImageGen</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.imageVersion">ImageVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.maximumRunners">MaximumRunners</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.publicIpEnabled">PublicIpEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.runnerGroupId">RunnerGroupId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.size">Size</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.image"></a>

```csharp
public ActionsHostedRunnerImageOutputReference Image { get; }
```

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference">ActionsHostedRunnerImageOutputReference</a>

---

##### `LastActiveOn`<sup>Required</sup> <a name="LastActiveOn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.lastActiveOn"></a>

```csharp
public string LastActiveOn { get; }
```

- *Type:* string

---

##### `MachineSizeDetails`<sup>Required</sup> <a name="MachineSizeDetails" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.machineSizeDetails"></a>

```csharp
public ActionsHostedRunnerMachineSizeDetailsList MachineSizeDetails { get; }
```

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList">ActionsHostedRunnerMachineSizeDetailsList</a>

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.platform"></a>

```csharp
public string Platform { get; }
```

- *Type:* string

---

##### `PublicIps`<sup>Required</sup> <a name="PublicIps" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.publicIps"></a>

```csharp
public ActionsHostedRunnerPublicIpsList PublicIps { get; }
```

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList">ActionsHostedRunnerPublicIpsList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.timeouts"></a>

```csharp
public ActionsHostedRunnerTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference">ActionsHostedRunnerTimeoutsOutputReference</a>

---

##### `ImageGenInput`<sup>Optional</sup> <a name="ImageGenInput" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.imageGenInput"></a>

```csharp
public bool|IResolvable ImageGenInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.imageInput"></a>

```csharp
public ActionsHostedRunnerImage ImageInput { get; }
```

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage">ActionsHostedRunnerImage</a>

---

##### `ImageVersionInput`<sup>Optional</sup> <a name="ImageVersionInput" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.imageVersionInput"></a>

```csharp
public string ImageVersionInput { get; }
```

- *Type:* string

---

##### `MaximumRunnersInput`<sup>Optional</sup> <a name="MaximumRunnersInput" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.maximumRunnersInput"></a>

```csharp
public double MaximumRunnersInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PublicIpEnabledInput`<sup>Optional</sup> <a name="PublicIpEnabledInput" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.publicIpEnabledInput"></a>

```csharp
public bool|IResolvable PublicIpEnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `RunnerGroupIdInput`<sup>Optional</sup> <a name="RunnerGroupIdInput" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.runnerGroupIdInput"></a>

```csharp
public double RunnerGroupIdInput { get; }
```

- *Type:* double

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.sizeInput"></a>

```csharp
public string SizeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.timeoutsInput"></a>

```csharp
public IResolvable|ActionsHostedRunnerTimeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeouts">ActionsHostedRunnerTimeouts</a>

---

##### `ImageGen`<sup>Required</sup> <a name="ImageGen" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.imageGen"></a>

```csharp
public bool|IResolvable ImageGen { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ImageVersion`<sup>Required</sup> <a name="ImageVersion" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.imageVersion"></a>

```csharp
public string ImageVersion { get; }
```

- *Type:* string

---

##### `MaximumRunners`<sup>Required</sup> <a name="MaximumRunners" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.maximumRunners"></a>

```csharp
public double MaximumRunners { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PublicIpEnabled`<sup>Required</sup> <a name="PublicIpEnabled" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.publicIpEnabled"></a>

```csharp
public bool|IResolvable PublicIpEnabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `RunnerGroupId`<sup>Required</sup> <a name="RunnerGroupId" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.runnerGroupId"></a>

```csharp
public double RunnerGroupId { get; }
```

- *Type:* double

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.size"></a>

```csharp
public string Size { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunner.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ActionsHostedRunnerConfig <a name="ActionsHostedRunnerConfig" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new ActionsHostedRunnerConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    ActionsHostedRunnerImage Image,
    string Name,
    double RunnerGroupId,
    string Size,
    bool|IResolvable ImageGen = null,
    string ImageVersion = null,
    double MaximumRunners = null,
    bool|IResolvable PublicIpEnabled = null,
    ActionsHostedRunnerTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.image">Image</a></code> | <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage">ActionsHostedRunnerImage</a></code> | image block. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.name">Name</a></code> | <code>string</code> | Name of the hosted runner. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.runnerGroupId">RunnerGroupId</a></code> | <code>double</code> | The runner group ID. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.size">Size</a></code> | <code>string</code> | Machine size (e.g., '4-core', '8-core'). Can be updated to scale the runner. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.imageGen">ImageGen</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Whether this runner should be used to generate custom images. Cannot be changed after creation. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.imageVersion">ImageVersion</a></code> | <code>string</code> | The version of the runner image to deploy. This is relevant only for runners using custom images. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.maximumRunners">MaximumRunners</a></code> | <code>double</code> | Maximum number of runners to scale up to. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.publicIpEnabled">PublicIpEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Whether to enable static public IP. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeouts">ActionsHostedRunnerTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.image"></a>

```csharp
public ActionsHostedRunnerImage Image { get; set; }
```

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage">ActionsHostedRunnerImage</a>

image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#image ActionsHostedRunner#image}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the hosted runner.

Must be between 1 and 64 characters and may only contain upper and lowercase letters a-z, numbers 0-9, '.', '-', and '_'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#name ActionsHostedRunner#name}

---

##### `RunnerGroupId`<sup>Required</sup> <a name="RunnerGroupId" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.runnerGroupId"></a>

```csharp
public double RunnerGroupId { get; set; }
```

- *Type:* double

The runner group ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#runner_group_id ActionsHostedRunner#runner_group_id}

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.size"></a>

```csharp
public string Size { get; set; }
```

- *Type:* string

Machine size (e.g., '4-core', '8-core'). Can be updated to scale the runner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#size ActionsHostedRunner#size}

---

##### `ImageGen`<sup>Optional</sup> <a name="ImageGen" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.imageGen"></a>

```csharp
public bool|IResolvable ImageGen { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Whether this runner should be used to generate custom images. Cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#image_gen ActionsHostedRunner#image_gen}

---

##### `ImageVersion`<sup>Optional</sup> <a name="ImageVersion" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.imageVersion"></a>

```csharp
public string ImageVersion { get; set; }
```

- *Type:* string

The version of the runner image to deploy. This is relevant only for runners using custom images.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#image_version ActionsHostedRunner#image_version}

---

##### `MaximumRunners`<sup>Optional</sup> <a name="MaximumRunners" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.maximumRunners"></a>

```csharp
public double MaximumRunners { get; set; }
```

- *Type:* double

Maximum number of runners to scale up to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#maximum_runners ActionsHostedRunner#maximum_runners}

---

##### `PublicIpEnabled`<sup>Optional</sup> <a name="PublicIpEnabled" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.publicIpEnabled"></a>

```csharp
public bool|IResolvable PublicIpEnabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Whether to enable static public IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#public_ip_enabled ActionsHostedRunner#public_ip_enabled}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerConfig.property.timeouts"></a>

```csharp
public ActionsHostedRunnerTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeouts">ActionsHostedRunnerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#timeouts ActionsHostedRunner#timeouts}

---

### ActionsHostedRunnerImage <a name="ActionsHostedRunnerImage" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new ActionsHostedRunnerImage {
    string Id,
    string Source = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage.property.id">Id</a></code> | <code>string</code> | The image ID. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage.property.source">Source</a></code> | <code>string</code> | The image source (github, partner, or custom). |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The image ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#id ActionsHostedRunner#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

The image source (github, partner, or custom).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#source ActionsHostedRunner#source}

---

### ActionsHostedRunnerMachineSizeDetails <a name="ActionsHostedRunnerMachineSizeDetails" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new ActionsHostedRunnerMachineSizeDetails {

};
```


### ActionsHostedRunnerPublicIps <a name="ActionsHostedRunnerPublicIps" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIps.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new ActionsHostedRunnerPublicIps {

};
```


### ActionsHostedRunnerTimeouts <a name="ActionsHostedRunnerTimeouts" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new ActionsHostedRunnerTimeouts {
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#delete ActionsHostedRunner#delete}. |

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.9.0/docs/resources/actions_hosted_runner#delete ActionsHostedRunner#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ActionsHostedRunnerImageOutputReference <a name="ActionsHostedRunnerImageOutputReference" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new ActionsHostedRunnerImageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.resetSource"></a>

```csharp
private void ResetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.sizeGb">SizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage">ActionsHostedRunnerImage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SizeGb`<sup>Required</sup> <a name="SizeGb" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.sizeGb"></a>

```csharp
public double SizeGb { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImageOutputReference.property.internalValue"></a>

```csharp
public ActionsHostedRunnerImage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerImage">ActionsHostedRunnerImage</a>

---


### ActionsHostedRunnerMachineSizeDetailsList <a name="ActionsHostedRunnerMachineSizeDetailsList" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new ActionsHostedRunnerMachineSizeDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.get"></a>

```csharp
private ActionsHostedRunnerMachineSizeDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ActionsHostedRunnerMachineSizeDetailsOutputReference <a name="ActionsHostedRunnerMachineSizeDetailsOutputReference" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new ActionsHostedRunnerMachineSizeDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.cpuCores">CpuCores</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.memoryGb">MemoryGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.storageGb">StorageGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetails">ActionsHostedRunnerMachineSizeDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CpuCores`<sup>Required</sup> <a name="CpuCores" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.cpuCores"></a>

```csharp
public double CpuCores { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MemoryGb`<sup>Required</sup> <a name="MemoryGb" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.memoryGb"></a>

```csharp
public double MemoryGb { get; }
```

- *Type:* double

---

##### `StorageGb`<sup>Required</sup> <a name="StorageGb" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.storageGb"></a>

```csharp
public double StorageGb { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetailsOutputReference.property.internalValue"></a>

```csharp
public ActionsHostedRunnerMachineSizeDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerMachineSizeDetails">ActionsHostedRunnerMachineSizeDetails</a>

---


### ActionsHostedRunnerPublicIpsList <a name="ActionsHostedRunnerPublicIpsList" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new ActionsHostedRunnerPublicIpsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.get"></a>

```csharp
private ActionsHostedRunnerPublicIpsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ActionsHostedRunnerPublicIpsOutputReference <a name="ActionsHostedRunnerPublicIpsOutputReference" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new ActionsHostedRunnerPublicIpsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.length">Length</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIps">ActionsHostedRunnerPublicIps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Length`<sup>Required</sup> <a name="Length" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.length"></a>

```csharp
public double Length { get; }
```

- *Type:* double

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIpsOutputReference.property.internalValue"></a>

```csharp
public ActionsHostedRunnerPublicIps InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerPublicIps">ActionsHostedRunnerPublicIps</a>

---


### ActionsHostedRunnerTimeoutsOutputReference <a name="ActionsHostedRunnerTimeoutsOutputReference" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new ActionsHostedRunnerTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeouts">ActionsHostedRunnerTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ActionsHostedRunnerTimeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-github.actionsHostedRunner.ActionsHostedRunnerTimeouts">ActionsHostedRunnerTimeouts</a>

---



