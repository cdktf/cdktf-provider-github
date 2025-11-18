# `repositoryDependabotSecurityUpdates` Submodule <a name="`repositoryDependabotSecurityUpdates` Submodule" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RepositoryDependabotSecurityUpdates <a name="RepositoryDependabotSecurityUpdates" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.8.3/docs/resources/repository_dependabot_security_updates github_repository_dependabot_security_updates}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositoryDependabotSecurityUpdates(Construct Scope, string Id, RepositoryDependabotSecurityUpdatesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig">RepositoryDependabotSecurityUpdatesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig">RepositoryDependabotSecurityUpdatesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a RepositoryDependabotSecurityUpdates resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

RepositoryDependabotSecurityUpdates.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

RepositoryDependabotSecurityUpdates.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

RepositoryDependabotSecurityUpdates.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

RepositoryDependabotSecurityUpdates.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a RepositoryDependabotSecurityUpdates resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RepositoryDependabotSecurityUpdates to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RepositoryDependabotSecurityUpdates that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.8.3/docs/resources/repository_dependabot_security_updates#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the RepositoryDependabotSecurityUpdates to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.enabledInput">EnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.repositoryInput">RepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.repository">Repository</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.repositoryInput"></a>

```csharp
public string RepositoryInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdates.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RepositoryDependabotSecurityUpdatesConfig <a name="RepositoryDependabotSecurityUpdatesConfig" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositoryDependabotSecurityUpdatesConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    bool|IResolvable Enabled,
    string Repository,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | The state of the automated security fixes. |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.repository">Repository</a></code> | <code>string</code> | The GitHub repository. |
| <code><a href="#@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.3/docs/resources/repository_dependabot_security_updates#id RepositoryDependabotSecurityUpdates#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

The state of the automated security fixes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.3/docs/resources/repository_dependabot_security_updates#enabled RepositoryDependabotSecurityUpdates#enabled}

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.repository"></a>

```csharp
public string Repository { get; set; }
```

- *Type:* string

The GitHub repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.3/docs/resources/repository_dependabot_security_updates#repository RepositoryDependabotSecurityUpdates#repository}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.repositoryDependabotSecurityUpdates.RepositoryDependabotSecurityUpdatesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.8.3/docs/resources/repository_dependabot_security_updates#id RepositoryDependabotSecurityUpdates#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



