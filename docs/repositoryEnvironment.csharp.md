# `repositoryEnvironment` Submodule <a name="`repositoryEnvironment` Submodule" id="@cdktf/provider-github.repositoryEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RepositoryEnvironment <a name="RepositoryEnvironment" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_environment github_repository_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositoryEnvironment(Construct Scope, string Id, RepositoryEnvironmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig">RepositoryEnvironmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig">RepositoryEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.putDeploymentBranchPolicy">PutDeploymentBranchPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.putReviewers">PutReviewers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.resetDeploymentBranchPolicy">ResetDeploymentBranchPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.resetReviewers">ResetReviewers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.resetWaitTimer">ResetWaitTimer</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDeploymentBranchPolicy` <a name="PutDeploymentBranchPolicy" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.putDeploymentBranchPolicy"></a>

```csharp
private void PutDeploymentBranchPolicy(RepositoryEnvironmentDeploymentBranchPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.putDeploymentBranchPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicy">RepositoryEnvironmentDeploymentBranchPolicy</a>

---

##### `PutReviewers` <a name="PutReviewers" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.putReviewers"></a>

```csharp
private void PutReviewers(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.putReviewers.parameter.value"></a>

- *Type:* object

---

##### `ResetDeploymentBranchPolicy` <a name="ResetDeploymentBranchPolicy" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.resetDeploymentBranchPolicy"></a>

```csharp
private void ResetDeploymentBranchPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetReviewers` <a name="ResetReviewers" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.resetReviewers"></a>

```csharp
private void ResetReviewers()
```

##### `ResetWaitTimer` <a name="ResetWaitTimer" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.resetWaitTimer"></a>

```csharp
private void ResetWaitTimer()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a RepositoryEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

RepositoryEnvironment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

RepositoryEnvironment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

RepositoryEnvironment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

RepositoryEnvironment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a RepositoryEnvironment resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RepositoryEnvironment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RepositoryEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_environment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the RepositoryEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.deploymentBranchPolicy">DeploymentBranchPolicy</a></code> | <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference">RepositoryEnvironmentDeploymentBranchPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.reviewers">Reviewers</a></code> | <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList">RepositoryEnvironmentReviewersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.deploymentBranchPolicyInput">DeploymentBranchPolicyInput</a></code> | <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicy">RepositoryEnvironmentDeploymentBranchPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.environmentInput">EnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.repositoryInput">RepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.reviewersInput">ReviewersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.waitTimerInput">WaitTimerInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.repository">Repository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.waitTimer">WaitTimer</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DeploymentBranchPolicy`<sup>Required</sup> <a name="DeploymentBranchPolicy" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.deploymentBranchPolicy"></a>

```csharp
public RepositoryEnvironmentDeploymentBranchPolicyOutputReference DeploymentBranchPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference">RepositoryEnvironmentDeploymentBranchPolicyOutputReference</a>

---

##### `Reviewers`<sup>Required</sup> <a name="Reviewers" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.reviewers"></a>

```csharp
public RepositoryEnvironmentReviewersList Reviewers { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList">RepositoryEnvironmentReviewersList</a>

---

##### `DeploymentBranchPolicyInput`<sup>Optional</sup> <a name="DeploymentBranchPolicyInput" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.deploymentBranchPolicyInput"></a>

```csharp
public RepositoryEnvironmentDeploymentBranchPolicy DeploymentBranchPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicy">RepositoryEnvironmentDeploymentBranchPolicy</a>

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.environmentInput"></a>

```csharp
public string EnvironmentInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RepositoryInput`<sup>Optional</sup> <a name="RepositoryInput" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.repositoryInput"></a>

```csharp
public string RepositoryInput { get; }
```

- *Type:* string

---

##### `ReviewersInput`<sup>Optional</sup> <a name="ReviewersInput" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.reviewersInput"></a>

```csharp
public object ReviewersInput { get; }
```

- *Type:* object

---

##### `WaitTimerInput`<sup>Optional</sup> <a name="WaitTimerInput" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.waitTimerInput"></a>

```csharp
public double WaitTimerInput { get; }
```

- *Type:* double

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.repository"></a>

```csharp
public string Repository { get; }
```

- *Type:* string

---

##### `WaitTimer`<sup>Required</sup> <a name="WaitTimer" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.waitTimer"></a>

```csharp
public double WaitTimer { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RepositoryEnvironmentConfig <a name="RepositoryEnvironmentConfig" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositoryEnvironmentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Environment,
    string Repository,
    RepositoryEnvironmentDeploymentBranchPolicy DeploymentBranchPolicy = null,
    string Id = null,
    object Reviewers = null,
    double WaitTimer = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.environment">Environment</a></code> | <code>string</code> | The name of the environment. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.repository">Repository</a></code> | <code>string</code> | The repository of the environment. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.deploymentBranchPolicy">DeploymentBranchPolicy</a></code> | <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicy">RepositoryEnvironmentDeploymentBranchPolicy</a></code> | deployment_branch_policy block. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_environment#id RepositoryEnvironment#id}. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.reviewers">Reviewers</a></code> | <code>object</code> | reviewers block. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.waitTimer">WaitTimer</a></code> | <code>double</code> | Amount of time to delay a job after the job is initially triggered. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.environment"></a>

```csharp
public string Environment { get; set; }
```

- *Type:* string

The name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_environment#environment RepositoryEnvironment#environment}

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.repository"></a>

```csharp
public string Repository { get; set; }
```

- *Type:* string

The repository of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_environment#repository RepositoryEnvironment#repository}

---

##### `DeploymentBranchPolicy`<sup>Optional</sup> <a name="DeploymentBranchPolicy" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.deploymentBranchPolicy"></a>

```csharp
public RepositoryEnvironmentDeploymentBranchPolicy DeploymentBranchPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicy">RepositoryEnvironmentDeploymentBranchPolicy</a>

deployment_branch_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_environment#deployment_branch_policy RepositoryEnvironment#deployment_branch_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_environment#id RepositoryEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Reviewers`<sup>Optional</sup> <a name="Reviewers" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.reviewers"></a>

```csharp
public object Reviewers { get; set; }
```

- *Type:* object

reviewers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_environment#reviewers RepositoryEnvironment#reviewers}

---

##### `WaitTimer`<sup>Optional</sup> <a name="WaitTimer" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentConfig.property.waitTimer"></a>

```csharp
public double WaitTimer { get; set; }
```

- *Type:* double

Amount of time to delay a job after the job is initially triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_environment#wait_timer RepositoryEnvironment#wait_timer}

---

### RepositoryEnvironmentDeploymentBranchPolicy <a name="RepositoryEnvironmentDeploymentBranchPolicy" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositoryEnvironmentDeploymentBranchPolicy {
    object CustomBranchPolicies,
    object ProtectedBranches
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicy.property.customBranchPolicies">CustomBranchPolicies</a></code> | <code>object</code> | Whether only branches that match the specified name patterns can deploy to this environment. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicy.property.protectedBranches">ProtectedBranches</a></code> | <code>object</code> | Whether only branches with branch protection rules can deploy to this environment. |

---

##### `CustomBranchPolicies`<sup>Required</sup> <a name="CustomBranchPolicies" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicy.property.customBranchPolicies"></a>

```csharp
public object CustomBranchPolicies { get; set; }
```

- *Type:* object

Whether only branches that match the specified name patterns can deploy to this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_environment#custom_branch_policies RepositoryEnvironment#custom_branch_policies}

---

##### `ProtectedBranches`<sup>Required</sup> <a name="ProtectedBranches" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicy.property.protectedBranches"></a>

```csharp
public object ProtectedBranches { get; set; }
```

- *Type:* object

Whether only branches with branch protection rules can deploy to this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_environment#protected_branches RepositoryEnvironment#protected_branches}

---

### RepositoryEnvironmentReviewers <a name="RepositoryEnvironmentReviewers" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositoryEnvironmentReviewers {
    double[] Teams = null,
    double[] Users = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewers.property.teams">Teams</a></code> | <code>double[]</code> | Up to 6 IDs for teams who may review jobs that reference the environment. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewers.property.users">Users</a></code> | <code>double[]</code> | Up to 6 IDs for users who may review jobs that reference the environment. |

---

##### `Teams`<sup>Optional</sup> <a name="Teams" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewers.property.teams"></a>

```csharp
public double[] Teams { get; set; }
```

- *Type:* double[]

Up to 6 IDs for teams who may review jobs that reference the environment.

Reviewers must have at least read access to the repository. Only one of the required reviewers needs to approve the job for it to proceed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_environment#teams RepositoryEnvironment#teams}

---

##### `Users`<sup>Optional</sup> <a name="Users" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewers.property.users"></a>

```csharp
public double[] Users { get; set; }
```

- *Type:* double[]

Up to 6 IDs for users who may review jobs that reference the environment.

Reviewers must have at least read access to the repository. Only one of the required reviewers needs to approve the job for it to proceed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.42.0/docs/resources/repository_environment#users RepositoryEnvironment#users}

---

## Classes <a name="Classes" id="Classes"></a>

### RepositoryEnvironmentDeploymentBranchPolicyOutputReference <a name="RepositoryEnvironmentDeploymentBranchPolicyOutputReference" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositoryEnvironmentDeploymentBranchPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.property.customBranchPoliciesInput">CustomBranchPoliciesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.property.protectedBranchesInput">ProtectedBranchesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.property.customBranchPolicies">CustomBranchPolicies</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.property.protectedBranches">ProtectedBranches</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicy">RepositoryEnvironmentDeploymentBranchPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomBranchPoliciesInput`<sup>Optional</sup> <a name="CustomBranchPoliciesInput" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.property.customBranchPoliciesInput"></a>

```csharp
public object CustomBranchPoliciesInput { get; }
```

- *Type:* object

---

##### `ProtectedBranchesInput`<sup>Optional</sup> <a name="ProtectedBranchesInput" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.property.protectedBranchesInput"></a>

```csharp
public object ProtectedBranchesInput { get; }
```

- *Type:* object

---

##### `CustomBranchPolicies`<sup>Required</sup> <a name="CustomBranchPolicies" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.property.customBranchPolicies"></a>

```csharp
public object CustomBranchPolicies { get; }
```

- *Type:* object

---

##### `ProtectedBranches`<sup>Required</sup> <a name="ProtectedBranches" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.property.protectedBranches"></a>

```csharp
public object ProtectedBranches { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicyOutputReference.property.internalValue"></a>

```csharp
public RepositoryEnvironmentDeploymentBranchPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentDeploymentBranchPolicy">RepositoryEnvironmentDeploymentBranchPolicy</a>

---


### RepositoryEnvironmentReviewersList <a name="RepositoryEnvironmentReviewersList" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositoryEnvironmentReviewersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.get"></a>

```csharp
private RepositoryEnvironmentReviewersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### RepositoryEnvironmentReviewersOutputReference <a name="RepositoryEnvironmentReviewersOutputReference" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new RepositoryEnvironmentReviewersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.resetTeams">ResetTeams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.resetUsers">ResetUsers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTeams` <a name="ResetTeams" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.resetTeams"></a>

```csharp
private void ResetTeams()
```

##### `ResetUsers` <a name="ResetUsers" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.resetUsers"></a>

```csharp
private void ResetUsers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.property.teamsInput">TeamsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.property.usersInput">UsersInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.property.teams">Teams</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.property.users">Users</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TeamsInput`<sup>Optional</sup> <a name="TeamsInput" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.property.teamsInput"></a>

```csharp
public double[] TeamsInput { get; }
```

- *Type:* double[]

---

##### `UsersInput`<sup>Optional</sup> <a name="UsersInput" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.property.usersInput"></a>

```csharp
public double[] UsersInput { get; }
```

- *Type:* double[]

---

##### `Teams`<sup>Required</sup> <a name="Teams" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.property.teams"></a>

```csharp
public double[] Teams { get; }
```

- *Type:* double[]

---

##### `Users`<sup>Required</sup> <a name="Users" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.property.users"></a>

```csharp
public double[] Users { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.repositoryEnvironment.RepositoryEnvironmentReviewersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



