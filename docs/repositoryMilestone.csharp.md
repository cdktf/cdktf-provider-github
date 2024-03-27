# `repositoryMilestone` Submodule <a name="`repositoryMilestone` Submodule" id="@cdktf/provider-github.repositoryMilestone"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RepositoryMilestone <a name="RepositoryMilestone" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/repository_milestone github_repository_milestone}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositoryMilestone(Construct Scope, string Id, RepositoryMilestoneConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig">RepositoryMilestoneConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig">RepositoryMilestoneConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.resetDueDate">ResetDueDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDueDate` <a name="ResetDueDate" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.resetDueDate"></a>

```csharp
private void ResetDueDate()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a RepositoryMilestone resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

RepositoryMilestone.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

RepositoryMilestone.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

RepositoryMilestone.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

RepositoryMilestone.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a RepositoryMilestone resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RepositoryMilestone to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RepositoryMilestone that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/repository_milestone#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the RepositoryMilestone to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.number">Number</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.dueDateInput">DueDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.ownerInput">OwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.repositoryInput">RepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.dueDate">DueDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.repository">Repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.title">Title</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Number`<sup>Required</sup> <a name="Number" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.number"></a>

```csharp
public double Number { get; }
```

- *Type:* double

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DueDateInput`<sup>Optional</sup> <a name="DueDateInput" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.dueDateInput"></a>

```csharp
public string DueDateInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.ownerInput"></a>

```csharp
public string OwnerInput { get; }
```

- *Type:* string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.repositoryInput"></a>

```csharp
public string RepositoryInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DueDate`<sup>Required</sup> <a name="DueDate" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.dueDate"></a>

```csharp
public string DueDate { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RepositoryMilestoneConfig <a name="RepositoryMilestoneConfig" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositoryMilestoneConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Owner,
    string Repository,
    string Title,
    string Description = null,
    string DueDate = null,
    string Id = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig.property.owner">Owner</a></code> | <code>string</code> | The owner of the GitHub Repository. |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig.property.repository">Repository</a></code> | <code>string</code> | The name of the GitHub Repository. |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig.property.title">Title</a></code> | <code>string</code> | The title of the milestone. |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig.property.description">Description</a></code> | <code>string</code> | A description of the milestone. |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig.property.dueDate">DueDate</a></code> | <code>string</code> | The milestone due date. In 'yyyy-mm-dd' format. |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/repository_milestone#id RepositoryMilestone#id}. |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig.property.state">State</a></code> | <code>string</code> | The state of the milestone. Either 'open' or 'closed'. Default: 'open'. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig.property.owner"></a>

```csharp
public string Owner { get; set; }
```

- *Type:* string

The owner of the GitHub Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/repository_milestone#owner RepositoryMilestone#owner}

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig.property.repository"></a>

```csharp
public string Repository { get; set; }
```

- *Type:* string

The name of the GitHub Repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/repository_milestone#repository RepositoryMilestone#repository}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

The title of the milestone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/repository_milestone#title RepositoryMilestone#title}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the milestone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/repository_milestone#description RepositoryMilestone#description}

---

##### `DueDate`<sup>Optional</sup> <a name="DueDate" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig.property.dueDate"></a>

```csharp
public string DueDate { get; set; }
```

- *Type:* string

The milestone due date. In 'yyyy-mm-dd' format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/repository_milestone#due_date RepositoryMilestone#due_date}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/repository_milestone#id RepositoryMilestone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

The state of the milestone. Either 'open' or 'closed'. Default: 'open'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.2.1/docs/resources/repository_milestone#state RepositoryMilestone#state}

---



