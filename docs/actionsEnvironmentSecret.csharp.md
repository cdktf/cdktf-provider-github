# `actionsEnvironmentSecret` Submodule <a name="`actionsEnvironmentSecret` Submodule" id="@cdktf/provider-github.actionsEnvironmentSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActionsEnvironmentSecret <a name="ActionsEnvironmentSecret" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/actions_environment_secret github_actions_environment_secret}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new ActionsEnvironmentSecret(Construct Scope, string Id, ActionsEnvironmentSecretConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig">ActionsEnvironmentSecretConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig">ActionsEnvironmentSecretConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.resetEncryptedValue">ResetEncryptedValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.resetPlaintextValue">ResetPlaintextValue</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetEncryptedValue` <a name="ResetEncryptedValue" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.resetEncryptedValue"></a>

```csharp
private void ResetEncryptedValue()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPlaintextValue` <a name="ResetPlaintextValue" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.resetPlaintextValue"></a>

```csharp
private void ResetPlaintextValue()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ActionsEnvironmentSecret resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

ActionsEnvironmentSecret.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

ActionsEnvironmentSecret.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

ActionsEnvironmentSecret.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

ActionsEnvironmentSecret.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ActionsEnvironmentSecret resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ActionsEnvironmentSecret to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ActionsEnvironmentSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/actions_environment_secret#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ActionsEnvironmentSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.encryptedValueInput">EncryptedValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.environmentInput">EnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.plaintextValueInput">PlaintextValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.repositoryInput">RepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.secretNameInput">SecretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.encryptedValue">EncryptedValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.plaintextValue">PlaintextValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.repository">Repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.secretName">SecretName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `EncryptedValueInput`<sup>Optional</sup> <a name="EncryptedValueInput" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.encryptedValueInput"></a>

```csharp
public string EncryptedValueInput { get; }
```

- *Type:* string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.environmentInput"></a>

```csharp
public string EnvironmentInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PlaintextValueInput`<sup>Optional</sup> <a name="PlaintextValueInput" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.plaintextValueInput"></a>

```csharp
public string PlaintextValueInput { get; }
```

- *Type:* string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.repositoryInput"></a>

```csharp
public string RepositoryInput { get; }
```

- *Type:* string

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.secretNameInput"></a>

```csharp
public string SecretNameInput { get; }
```

- *Type:* string

---

##### `EncryptedValue`<sup>Required</sup> <a name="EncryptedValue" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.encryptedValue"></a>

```csharp
public string EncryptedValue { get; }
```

- *Type:* string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PlaintextValue`<sup>Required</sup> <a name="PlaintextValue" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.plaintextValue"></a>

```csharp
public string PlaintextValue { get; }
```

- *Type:* string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.secretName"></a>

```csharp
public string SecretName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ActionsEnvironmentSecretConfig <a name="ActionsEnvironmentSecretConfig" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new ActionsEnvironmentSecretConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Environment,
    string Repository,
    string SecretName,
    string EncryptedValue = null,
    string Id = null,
    string PlaintextValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.environment">Environment</a></code> | <code>string</code> | Name of the environment. |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.repository">Repository</a></code> | <code>string</code> | Name of the repository. |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.secretName">SecretName</a></code> | <code>string</code> | Name of the secret. |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.encryptedValue">EncryptedValue</a></code> | <code>string</code> | Encrypted value of the secret using the GitHub public key in Base64 format. |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/actions_environment_secret#id ActionsEnvironmentSecret#id}. |
| <code><a href="#@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.plaintextValue">PlaintextValue</a></code> | <code>string</code> | Plaintext value of the secret to be encrypted. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.environment"></a>

```csharp
public string Environment { get; set; }
```

- *Type:* string

Name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/actions_environment_secret#environment ActionsEnvironmentSecret#environment}

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.repository"></a>

```csharp
public string Repository { get; set; }
```

- *Type:* string

Name of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/actions_environment_secret#repository ActionsEnvironmentSecret#repository}

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.secretName"></a>

```csharp
public string SecretName { get; set; }
```

- *Type:* string

Name of the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/actions_environment_secret#secret_name ActionsEnvironmentSecret#secret_name}

---

##### `EncryptedValue`<sup>Optional</sup> <a name="EncryptedValue" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.encryptedValue"></a>

```csharp
public string EncryptedValue { get; set; }
```

- *Type:* string

Encrypted value of the secret using the GitHub public key in Base64 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/actions_environment_secret#encrypted_value ActionsEnvironmentSecret#encrypted_value}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/actions_environment_secret#id ActionsEnvironmentSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PlaintextValue`<sup>Optional</sup> <a name="PlaintextValue" id="@cdktf/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.plaintextValue"></a>

```csharp
public string PlaintextValue { get; set; }
```

- *Type:* string

Plaintext value of the secret to be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/actions_environment_secret#plaintext_value ActionsEnvironmentSecret#plaintext_value}

---



